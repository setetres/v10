<template>
    <section class="section section--home">
        <div class="gutter _d-flex _flex-column">
            <div class="_d-flex _justify-content-between">
                <Logo />
            </div>
            <div class="ooo-row">
                <div class="ooo-col-xl-6">
                    <nav class="menu">
                        <ul>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/about" class="link link--internal link--profile">
                                            <span class="link__icon" />
                                            About
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/archive" class="link link--internal link--archive">
                                            <span class="link__icon" />
                                            Archive
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/inkstarter" class="link link--internal link--inkstarter">
                                            <span class="link__icon" />
                                            InkStarter
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="ooo-col-xl-6">
                    <nav class="menu">
                        <ul>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/lifestream" class="link link--internal link--lifestream">
                                            <span class="link__icon" />
                                            Lifestream <sup>New</sup>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/mncrft" class="link link--internal link--mncrft">
                                            <span class="link__icon" />
                                            MNCRFT <sup>New</sup>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <footer class="footer footer--loading">
            <div class="gutter">
                <div class="footer__content">
                    <div id="game" class="game">
                        <div class="game__panel">
                            <div class="ooo-row">
                                <div class="ooo-col-6">
                                    <a id="game__panel-button-1" href="#" class="link link--external game__panel-button">Ø</a>
                                </div>
                                <div class="ooo-col-6">
                                    <a id="game__panel-button-2" href="#" class="link link--external game__panel-button">Reset</a>
                                </div>
                            </div>
                        </div>
                        <canvas id="game__world" class="game__world" />
                        <div class="game__info">
                            <div class="ooo-row">
                                <div class="ooo-col-6">
                                    <span>Generation:</span><br>
                                    <span id="info-generation">0</span>
                                </div>
                                <div class="ooo-col-6">
                                    <span>Life cell:</span><br>
                                    <span id="info-life-cell">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="gutter _d-flex _justify-content-between _align-items-center _mb-0">
            <p>
                <span class="section__signature">Est 2008</span>
            </p>
        </div>
    </section>
</template>
<script>
    import LocomotiveScroll from '~/mixins/locomotive-scroll.js'
    import Logo from '~/components/logo.vue'

    export default {
        components: {
            Logo
        },

        mixins: [
            LocomotiveScroll
        ],

        mounted() {
            this.$nextTick(() => {
                document.querySelector('.footer').classList.remove('footer--loading')

                document.querySelectorAll('.reveal').forEach(function(item) {
                    item.classList.add('reveal--active')
                })

                setTimeout(function() {
                    document.querySelector('.logo').classList.add('logo--active')
                    document.querySelector('.dark-mode').classList.add('dark-mode--active')
                }, 250)

                /*eslint-disable */

                var GameOfLife = (function() {
                    function GameOfLife(config) {
                        this.canvas = config.canvas
                        this.unitSize = config.unitSize
                        this.columns = config.columns
                        this.lines = config.lines
                        this.drawRate = config.drawRate
                        this.gridSize = config.gridSize

                        this.width = this.canvas.width = this.unitSize * this.columns
                        this.height = this.canvas.height = this.unitSize * this.lines

                        this.ctx = this.canvas.getContext('2d')
                        this.infoPanel = config.infoPanel
                        this.infoGeneration = config.infoGeneration
                        this.infoLifeCell = config.infoLifeCell

                        this.oldState = []
                        this.newState = []
                        this.useState = []

                        this.gameOn = false
                        this.counter = 0
                        this.lifeCell = 0

                        this.gameBox = config.gameBox
                        this.gameBoxSize = {w: this.gameBox.clientWidth, h: this.gameBox.clientHeight}
                    }

                    GameOfLife.prototype.init = function() {
                        for(var i = 0; i < this.columns; i++) {
                            this.oldState[i] = []
                            this.newState[i] = []
                            this.useState[i] = []

                            for(var j = 0; j < this.lines; j++) {
                                this.newState[i][j] = false
                                this.oldState[i][j] = false
                                this.useState[i][j] = false
                            }
                        }
                    }

                    GameOfLife.prototype.randomDraft = function() {
                        for(var i = 0; i < this.columns; i++) {
                            this.oldState[i] = []
                            this.newState[i] = []
                            this.useState[i] = []

                            for(var j = 0; j < this.lines; j++) {
                                var result = Math.random() < .075

                                this.newState[i][j] = result
                                this.oldState[i][j] = result
                                this.useState[i][j] = false
                            }
                        }

                        this.update()
                        this.counter = 0
                    }

                    GameOfLife.prototype.update = function() {
                        for(var i = 0; i < this.columns; i++) {
                            for(var j = 0; j < this.lines; j++) {
                                this.newState[i][j] = this.updateState( i, j )
                            }
                        }

                        for(var i = 0; i < this.newState.length; i++) {
                            for(var j = 0; j < this.newState[i].length; j++) {
                                this.oldState[i][j] = this.newState[i][j] ? true : false
                            }
                        }

                        this.counter++
                    }

                    GameOfLife.prototype.updateState = function(i, j){
                        var adyacentAlive = 0,
                            iMinus = i - 1 >= 0,
                            iPlus = i + 1 < this.columns,
                            jMinus = j - 1 >= 0,
                            jPlus = j + 1 < this.lines

                        if(iMinus && jMinus && this.oldState[i-1][j-1]){ adyacentAlive++ }
                        if(iMinus && this.oldState[i-1][j]){ adyacentAlive++ }
                        if(iMinus && jPlus && this.oldState[i-1][j+1]){ adyacentAlive++ }
                        if(iPlus && jMinus && this.oldState[i+1][j-1]){ adyacentAlive++ }

                        if(iPlus && this.oldState[i+1][j]){ adyacentAlive++ }
                        if(iPlus && jPlus && this.oldState[i+1][j+1]){ adyacentAlive++ }
                        if(jMinus && this.oldState[i][j-1]){ adyacentAlive++ }
                        if(jPlus && this.oldState[i][j+1]){ adyacentAlive++ }

                        return (this.oldState[i][j] && adyacentAlive === 2) || (this.oldState[i][j] && adyacentAlive === 3) || (!this.oldState[i][j] && adyacentAlive === 3)
                    }

                    GameOfLife.prototype.draw = function() {
                        this.lifeCell = 0
                        this.ctx.clearRect(0, 0, this.width, this.height)

                        this.drawGrid()

                        for(var i = 0; i < this.columns; i++) {
                            for(var j = 0; j < this.lines; j++) {
                                if(this.useState[i][j]) {
                                    this.ctx.beginPath()
                                    this.ctx.fillStyle = 'rgba(119,119,119,.15)'
                                    this.ctx.fillRect(i*this.unitSize, j*this.unitSize, this.unitSize, this.unitSize)
                                    this.ctx.closePath()
                                }
                            }
                        }

                        for(var i = 0; i < this.columns; i++) {
                            for(var j = 0; j < this.lines; j++) {
                                if(this.newState[i][j]) {
                                    this.lifeCell++
                                    this.useState[i][j] = true

                                    this.ctx.beginPath()
                                    this.ctx.fillStyle = 'rgba(0,255,184,.2)'
                                    this.ctx.fillRect(i*this.unitSize, j*this.unitSize, this.unitSize, this.unitSize)
                                    this.ctx.closePath()
                                }
                            }
                        }
                    }

                    GameOfLife.prototype.addUnit = function(x, y) {
                        var i = Math.floor(x/this.unitSize)
                        var j = Math.floor(y/this.unitSize)

                        this.newState[i][j] = !this.newState[i][j]
                        this.oldState[i][j] = !this.oldState[i][j]
                    }

                    GameOfLife.prototype.gg = function() {
                        this.gameOn = !this.gameOn
                    }

                    GameOfLife.prototype.start = function() {
                        this.init()
                        this.draw()

                        setInterval(this.tick, this.drawRate, this)
                    }

                    GameOfLife.prototype.tick = function(self) {
                        if(self.gameOn) self.update()

                        self.infoGeneration.innerHTML = self.getGeneration()
                        self.infoLifeCell.innerHTML = self.getLifeCell()

                        self.draw()
                        self.grid = self.state
                    }

                    GameOfLife.prototype.getWorldSize = function() {
                        return {
                            w: this.width,
                            h: this.height
                        }
                    }

                    GameOfLife.prototype.getGeneration = function() {
                        return this.counter
                    }

                    GameOfLife.prototype.getLifeCell = function() {
                        return this.lifeCell
                    }

                    GameOfLife.prototype.drawGrid = function() {
                        var hLines = this.height/this.unitSize/this.gridSize
                        var wLines = this.width/this.unitSize/this.gridSize

                        for(var i = 0; i < hLines; i++) {
                            this.ctx.beginPath()
                            this.ctx.moveTo(0, i*this.gridSize*this.unitSize-.5)
                            this.ctx.lineTo(this.width, i*this.gridSize*this.unitSize-.5)

                            if(i%5) {
                                this.ctx.strokeStyle = 'rgba(66,66,66,.3)'
                            } else {
                                this.ctx.strokeStyle = 'rgba(66,66,66,.7)'
                            }

                            this.ctx.stroke()
                            this.ctx.closePath()
                        }

                        for(var i = 0; i < wLines; i++) {
                            this.ctx.beginPath()
                            this.ctx.moveTo(i*this.gridSize*this.unitSize-.5, 0)
                            this.ctx.lineTo(i*this.gridSize*this.unitSize-.5, this.height)

                            if(i%5) {
                                this.ctx.strokeStyle = 'rgba(66,66,66,.3)'
                            } else {
                                this.ctx.strokeStyle = 'rgba(66,66,66,.7)'
                            }

                            this.ctx.stroke()
                            this.ctx.closePath()
                        }
                    }

                    GameOfLife.prototype.reset = function() {
                        this.init()
                        this.gameOn = false
                        this.counter = 0
                        this.lifeCell = 0
                    }

                    return GameOfLife
                })()

                var c = document.getElementById('game__world')
                var startButton = document.getElementById('game__panel-button-1')
                var resetWorld = document.getElementById('game__panel-button-2')
                var infoPanel = document.getElementsByClassName('game__info')[0]
                var infoGeneration = document.getElementById('info-generation')
                var infoLifeCell = document.getElementById('info-life-cell')
                var gameBox = document.getElementById('game')

                var gameOfLife = new GameOfLife({
                    canvas: c,
                    unitSize: 10,
                    columns: 180,
                    lines: 120,
                    drawRate: 1000/16,
                    gridSize: 4,
                    infoPanel: infoPanel,
                    infoGeneration: infoGeneration,
                    infoLifeCell: infoLifeCell,
                    gameBox: gameBox
                })

                gameOfLife.start()
                gameOfLife.randomDraft()
                gameOfLife.gg()

                c.addEventListener('click', function(e) {
                    gameOfLife.addUnit(e.offsetX, e.offsetY)
                })

                startButton.addEventListener('click', function() {
                    gameOfLife.gg()
                })

                resetWorld.addEventListener('click', function() {
                    gameOfLife.reset()
                    gameOfLife.randomDraft()
                    gameOfLife.gg()
                })

                /*eslint-enable */
            })
        },

        beforeRouteLeave(to, from, next) {
            document.querySelector('.logo').classList.remove('logo--active')
            document.querySelector('.footer').classList.add('footer--loading')

            document.querySelectorAll('.reveal').forEach(function(item) {
                item.classList.remove('reveal--active')
            })

            setTimeout(function() {
                next()
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três'
            }
        }
    }
</script>
