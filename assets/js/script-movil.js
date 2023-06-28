Vue.component('movil-aside', {
    template: `
    <div class="cart-celular med sombra-gra marg-0">
        <div class="bloq-contenido cur-puntero display-cell">
            <div class="cortina tarj" :class="opencortina ? 'abrir-cortina' : ''">
                <div class="bloq-contenedor alin-centro">
                    <div class="bloq-icono tam-med borde-todo bord-claro">
                        <i v-bind:class="dataCortina.icon"></i>
                    </div>
                    <div class="bloq marg-izq-med">
                        <span class="t-peq">{{ dataCortina.desc }}</span>
                    </div>
                </div>
                <span class="bloq-flo detalles-subs sombra-peq" v-if="dataCortina.subs">
                    <i class="icon-user marg-der-peq texto-cielo"></i> {{ dataCortina.subs }}
                </span>
            </div>
            <nav class="nav-contenedor sombra-peq just-entre fondo-claro">
                <ul class="nav-hor">
                    <li>
                        <a class="nav-enlace">
                            <i class="li-icono icon-mobile"></i>
                            <span>Navegación</span>
                        </a>
                    </li>
                </ul>
                <ul class="nav-hor">
                    <li>
                        <a class="nav-enlace icono" v-on:click="open = true">
                            <i class="icon-menu"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="flexcol alin-centro just-centro rell-med tex-claro">
                <h3>{{ datetime.hour }}<span class="puntos-hora-animate">:</span>{{ datetime.minuts }} <span class="t-med">{{ datetime.horary }}</span></h3>
                <span class="t-peq">Bienvenidas/os</span>
            </div>
            <div class="celda-col-3 sep-med rell-hor-med alin-cen tex-claro botones-menu">
                <a v-bind:target="iten.target ? '_black' : '_self'" v-bind:href="iten.url ? iten.url : '#'" v-for="(iten, index) of botones" :key="index" class="cart item-button alin-centro" v-bind:data-id="iten.id">
                    <div v-bind:class="['bloq-icono redon-med tam-med sombra-gra', iten.tema]">
                        <i v-bind:class="iten.icon"></i>
                    </div>
                    <span class="t-peq marg-arr-min">{{ iten.titulo }}</span>
                </a>
            </div>
            <!--====  End of interfaz de aplicacion  ====-->
            <div v-bind:class="['pos-absoluta nav', { 'openMenu' : open }]">
                <nav class="nav-contenedor">
                    <div class="cart-usuario-sidebar sombra-min">
                        <div class="bloq-cel">
                            <div class="bloq-avatar tam-gra borde-sombra-min">
                                <img src="assets/img/AG-Desing.png" alt="">
                            </div>
                            <div class="blo-auto">
                                <button type="button" class="boton-cir tema-claro efecto-clic efecto-neg" v-on:click="open = false">
                                    <i class="icon-arrow-left2"></i>
                                </button>
                            </div>
                        </div>
                        <div class="bloq-contenido">
                            <h4 class="f-titulo">Navegación</h4>
                            <!-- <ul class="bloq-ul direccion-fila sep-barr">
                                <li class="bloq-li">Autor</li>
                                <li class="bloq-li">Obras</li>
                            </ul> -->
                        </div>
                    </div>
                    <ul class="nav-ver nav-dividido">
                        <li>
                            <a v-bind:href="iten.id" class="nav-enlace" v-for="(iten, index) of navegacion" :key="index">
                                <i v-bind:class="['li-icono', iten.icon]"></i> {{ iten.ancla }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="bloq-flo botones">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    `,
    mounted: function () {
        this.eventSelect();
        this.timeInterval();
        this.opencloseMenu();
    },
    data(){
        return {
            opencortina: false,
            open: false,
            botones: [
                {
                    target: true,
                    id: 'iten-1',
                    url: 'https://www.facebook.com/ApockGraficos',
                    tema: 'tema-facebook',
                    icon: 'icon-facebook',
                    titulo: 'facebook',
                    desc: 'Sumate a nuestra pagina de facebook',
                    subs: '24 seguidores'
                },
                {
                    target: true,
                    id: 'iten-2',
                    url: 'https://www.instagram.com/apockgraficos',
                    tema: 'tema-instagram',
                    icon: 'icon-instagram',
                    titulo: 'instagram',
                    desc: 'Galeria con gran contenido de diseño web',
                    subs: '31 seguidores'
                },
                {
                    target: true,
                    id: 'iten-3',
                    url: 'https://www.youtube.com/ApockGraficos',
                    tema: 'tema-peligro',
                    icon: 'icon-youtube',
                    titulo: 'youtube',
                    desc: 'Tutoriales front-end, utilidades y mucho mas!',
                    subs: '375 subs'
                },
                {
                    target: false,
                    id: 'iten-4',
                    url: '#',
                    tema: 'tema-info',
                    icon: 'icon-location',
                    titulo: 'Ubicacion',
                    desc: 'Somos de pivijay magdalena'
                },
                {
                    target: true,
                    id: 'iten-5',
                    url: 'https://twitter.com/ApockGraficos',
                    tema: 'tema-twitter',
                    icon: 'icon-twitter',
                    titulo: 'twitter',
                    desc: '¡Siguenos! donde cada que podemos pulicamos algo nuevo',
                    subs: '24 seguidores'
                },
                {
                    target: false,
                    id: 'iten-6',
                    url: '#seleccion',
                    tema: 'tema-acierto',
                    icon: 'icon-whatsapp',
                    titulo: 'whatsapp',
                    desc: 'Contactanos para tener el gusto de atenderte',
                }
            ],
            navegacion:  [
                {
                    id: '#conocenos',
                    icon: 'icon-music',
                    ancla: 'Conocenos'
                },
                {
                    id: '#dominamos',
                    icon: 'icon-stats-bars',
                    ancla: 'Dominamos'
                },
                {
                    id: '#descamos',
                    icon: 'icon-image',
                    ancla: 'Sobre nosotros'
                },
            ],
            dataCortina: {
                desc: '',
                subs: 0,
                icon: ''
            },
            datetime: {
                hour: '00',
                minuts: '00',
                horary: '- -'
            }
        }
    },
    methods: {
        eventSelect(){
            let items = document.querySelectorAll('.item-button');
            items.forEach(item => {
                item.addEventListener('mouseenter', this.in);
                item.addEventListener('mouseleave', this.out);
            })
        },
        in(e){
            this.opencortina = true;
            let id = e.target.getAttribute('data-id');
            let fitro = this.botones.filter(item => item.id === id);
            let item = fitro[0];
            this.dataCortina.desc = item.desc;
            this.dataCortina.icon = item.icon;
            this.dataCortina.subs = item.subs;
        },
        out(){
            this.opencortina = false;
        },
        timeInterval(){
            setInterval(()=>{
                let date = new Date();
                let h = date.getHours();
                let m = date.getMinutes();
                h = h < 10 ? '0'+h: h;
                m = m < 10 ? '0'+m: m;
                this.datetime.hour = h;
                this.datetime.minuts = m;
                this.datetime.horary = date.getHours() >= 12 ? 'p.m' : 'a.m';
            },1000)
        },
        opencloseMenu(){
            let inicio, final;
            let cel = document.querySelector('.display-cell');
            cel.addEventListener('mousedown', (mousedown) => {
                inicio = mousedown.offsetX;
            })
            cel.addEventListener('mouseup', (mouseup) => {
                final = mouseup.offsetX;
                if (final > inicio) {
                    this.open = true;
                } else {
                    this.open = false;
                }
            })
        }
    }
});

const cel = new Vue({
    el: '#app-movil'
});