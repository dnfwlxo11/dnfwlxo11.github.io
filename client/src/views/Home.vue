<template>
    <div class="home">
        <div class="top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3 w-100">
                <span class="pl-3 text-left w-25"><img class="logo" :src="require('@/assets/jujube.png')"></span>
                <span class="w-50" style="font-size: 2.5rem;"><strong>Hi, I'm Daein</strong></span>                
                <button class="navbar-toggler pr-3" type="button" data-toggle="collapse" data-target="#target"
                    aria-controls="target" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="target">
                    <div class="pr-3 text-right ml-auto">
                        <a href="https://github.com/dnfwlxo11" class="nav-item mr-3"><i class="mdi mdi-github"></i></a>
                        <a href="https://daechu.tistory.com/" class="nav-item mr-3"><i class="mdi mdi-post-outline"></i></a>
                        <a href="mailto:dnfwlxo11@gmail.com" class="nav-item mr-3"><i class="mdi mdi-email-multiple-outline"></i></a>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container">
            <div class="contents mt-5 mb-5">
                <br><br><br>
                <div class="ml-auto mr-auto">
                    <h1><strong>𝙒𝙃𝙊 </strong></h1>
                </div>
                <br><br>
                <div class="ml-auto mr-auto">
                    <h5> 안녕하세요 <strong>임대인입니다.</strong> <br> 끊임없이 배우며 즐거움을 얻고 성장에 쾌감을 얻습니다.</h5>

                </div>
                <br><br><br>
                <div class="ml-auto mr-auto">
                    <h5><strong>자바스크립트 풀스택 개발자</strong>로 일하고 있으며 <br> 자바, 클라우드도 관심있게 공부하고 있습니다.</h5>
                </div>
                <br><br>
                <div class="row d-md-flex d-none">
                    <div class="col-md-12 ml-auto mr-auto">
                        <div class="card">
                            <div class="row pt-3">
                                <div class="col-md-6 pt-3">
                                    <h5><strong>개발 스택 </strong></h5>
                                    <p class="imoji">😤</p> <br>
                                    <h4><strong>𝐖𝐞𝐛</strong></h4>
                                    <li>Node.js</li>
                                    <li>Vue.js</li> <br>
                                    <h4><strong>𝐀𝐩𝐩</strong></h4>
                                    <li>Flutter</li> <br>
                                    <h4><strong>𝐃𝐁</strong></h4>
                                    <li>MySQL</li>
                                    <li>MongoDB</li> <br>
                                    <h4><strong>𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭</strong></h4>
                                    <li>Docker</li> <br>
                                </div>
                                <div class="col-md-6 pt-3">
                                    <h5><strong>공부! 관심!</strong></h5>
                                    <p class="imoji">🤨</p> <br>
                                    <h4><strong>𝐖𝐞𝐛</strong></h4>
                                    <li>Spring</li>
                                    <li>React.js</li> <br>
                                    <h4><strong>𝐃𝐁</strong></h4>
                                    <li>PostgreSQL</li> <br>
                                    <h4><strong>𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭</strong></h4>
                                    <li>AWS</li> <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex d-md-none">
                    <div class="col-md-6 mb-3">
                        <div class="card p-3">
                            <h5><strong>개발 스택 </strong></h5>
                            <p class="imoji">😤</p> <br>
                            <h4><strong>𝐖𝐞𝐛</strong></h4>
                            <li>Node.js</li>
                            <li>Vue.js</li> <br>
                            <h4><strong>𝐀𝐩𝐩</strong></h4>
                            <li>Flutter</li> <br>
                            <h4><strong>𝐃𝐁</strong></h4>
                            <li>MySQL</li>
                            <li>MongoDB</li> <br>
                            <h4><strong>𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭</strong></h4>
                            <li>Docker</li> <br>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card p-3">
                            <h5><strong>공부! 관심!</strong></h5>
                            <p class="imoji">🤨</p> <br>
                            <h4><strong>𝐖𝐞𝐛</strong></h4>
                            <li>Spring</li>
                            <li>React.js</li> <br>
                            <h4><strong>𝐃𝐁</strong></h4>
                            <li>PostgreSQL</li> <br>
                            <h4><strong>𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭</strong></h4>
                            <li>AWS</li> <br>
                        </div>
                    </div>
                </div>
                <br><br><br>
                <div class="line mb-3"></div>
                <br><br>

                <div class="mb-3">
                    <div class="ml-auto mr-auto">
                        <div class="mb-5">
                            <h1><strong>𝙒𝙃𝘼𝙏</strong></h1>
                        </div>
                        <div id="carouselItems" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselItems" :data-slide-to="idx" :class="{'active': idx==0}" v-for="(project, idx) in projects" :key="idx" style="background-color: grey;height: 10px;"/>
                            </ol>
                            
                            <a class="carousel-control-prev" href="#carouselItems" role="button" data-slide="prev" style="width: 5%">
                                <i class="mdi mdi-chevron-left" style="color: grey;"></i>
                            </a>
                            <div class="carousel-inner">
                                <div :class="{'active': idx==0}" class="carousel-item" v-for="(project, idx) in projects" :key="idx">
                                    <project :content="project"></project>
                                </div>
                            </div>
                            <a class="carousel-control-next" href="#carouselItems" role="button" data-slide="next" style="width: 5%">
                                <i class="mdi mdi-chevron-right" style="color: grey;"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Project from './vues/project.vue'

    export default {
        name: 'Home',
        components: {
            Project
        },
        data() {
            return {
                projects: [
                {
                    name: '매치메이커',
                    content: '군부대에선 매일 전투체육이라는 활동을 하는데 마땅한 대전(운동) 상대를 찾는데 방송을 하지 않는이상 하기 힘듦, 이를 해결하기 위해 간단하게 <strong class="text-danger">대전(운동) 상대를 매칭 시켜주는 앱 <br>(군복무중 만들어 주제가 이러함)</strong>',
                    func: '안드로이드, 매칭 설계, 로그인 및 세션관리',
                    period: '2017.10.02 ~ 2017.10.20',
                    github: 'https://github.com/dnfwlxo11/military-sports-matchmaker',
                    front: '안드로이드',
                    back: 'Node.js',
                    deploy: 'None',
                    album: 'match',
                    albumLen: 5,
                },
                {
                    name: '알쏭',
                    content: '소켓 통신을 활용하여 방으로 분리된 카카오톡과 같은 <strong class="text-danger">채팅 환경 제공하고</strong> 예약어를 활용한 <strong class="text-danger">퀴즈 기능을 넣어 사용자끼리 간단하게 놀 수 있는 환경을 제공하는 프로그램</strong>',
                    func: '익명 채팅, 소켓 통신',
                    period: '2018.10.04 ~ 2018.10.30',
                    github: 'https://github.com/dnfwlxo11/OpenSource_A-Team-FinalResult.git',
                    front: '자바 스윙(Swing)',
                    back: '자바',
                    deploy: 'None',
                    album: 'alsong',
                    albumLen: 5,
                },
                {
                    name: '카피',
                    content: '실시간으로 물고기를 관찰하고 병어를 분류할 수 있는 분류 모델을 결합하여 양식장과 같은 어민들이 사용하여 <strong class="text-danger">병어를 분류하여 어업에 도움을 주는 서비스</strong>',
                    func: '스트리밍, 영상처리, AI모델과 연동, IoT 센서와 연동',
                    period: '2019.11.18 ~ 2019.12.09',
                    github: 'https://github.com/dnfwlxo11',
                    front: 'Html',
                    back: 'python',
                    deploy: 'None',
                    album: 'dummy',
                    albumLen: 1,
                },
                {
                    name: 'I-Tub',
                    content: '샤워할때마다 귀찮은 준비 과정을 자동으로 세팅해주고 여러 사용자들의 선호도를 학습하여 <strong class="text-danger">직업, 나이, 성별 등의 요소에 맞게 맞춤 환경을 추천, 세팅해주는 샤워 서비스</strong>',
                    func: '회원관리, AI모델과 연동, IoT 센서와 연동',
                    period: '2020.04.20 ~ 2020.06.25',
                    github: 'https://github.com/Ultimate-ItubProject/Itub_Web',
                    front: 'Html, Css',
                    back: 'Node.js',
                    deploy: 'Heroku',
                    album: 'itub',
                    albumLen: 6,
                },
                {
                    name: '캐치마인드',
                    content: '<strong class="text-danger">그림을 그려 단어를 유추해 퀴즈를 맞추는 고전게임</strong>으로 소켓 통신을 활용하여 여러명의 유저들이 실시간으로 그림을 그리고 채팅을 할 수 있는 서비스',
                    func: '소켓 통신, 실시간 공유',
                    period: '2021.05.26 ~ 2021.06.09',
                    github: 'https://github.com/dnfwlxo11/catchMind_with_Nodejs',
                    front: 'Vue, Node.js (static)',
                    back: 'Node.js',
                    deploy: 'None',
                    album: 'dummy',
                    albumLen: 1,
                },
                {
                    name: '이거 어딨어?',
                    content: '<strong class="text-danger">영상에서 찾고자하는 물체(객체)를</strong> 찾아 <strong class="text-danger">시간대를 알려주는 서비스</strong>, 해상도, 공식 등 여러가지 옵션에 맞게 사용할 수 있음',
                    func: '영상 처리, AI 모델',
                    period: '2021.06.18 ~ 2021.07.09',
                    github: 'https://github.com/dnfwlxo11/searchCertainFrame',
                    front: 'Vue, Flask (static)',
                    back: 'Flask',
                    deploy: 'Docker',
                    album: 'certainFrame',
                    albumLen: 3,
                },
                {
                    name: 'everyCanAI',
                    content: '<strong class="text-danger">누구나</strong> 쉽게 자신만의 분류모델을 만들 수 있도록 도와주는 서비스, <strong class="text-danger">사진만 넣고</strong> 버튼을 클릭하면 몇 분후 <strong class="text-danger">자신만의 모델 생성, 다운로드 및 추론 테스트 가능</strong>',
                    func: '파일 업로드, 다운로드, AI 연동',
                    period: '2021.11.04 ~ 2021.12.02',
                    github: 'https://github.com/dnfwlxo11/everyCanAI',
                    front: 'Vue, Node.js (static)',
                    back: 'Flask (train), Node.js (image)',
                    deploy: 'Docker',
                    album: 'easy',
                    albumLen: 4
                }],
            }
        },
        mounted() {
            this.changeMode();
        },
        methods: {
            changeMode() {
                this.projects = this.projects.reverse()
                this.projectMode = !this.projectMode;
            }
        }
    }
</script>

<style>
    html,
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        min-width: 480px;
    }

    .mdi {
        font-size: 40px;
    }

    .logo {
        height: 40px;
        width: 120px;
    }

    .imoji {
        font-size: 30px;
    }

    .top {
        height: 100px;
        width: 100%;
    }

    .navbar {
        background-color: lightgray;
        position: fixed;
        z-index: 1;
    }

    li {
        list-style: none;
    }

    .line {
        border-bottom: 2px solid grey;
        opacity: 0.2;
    }

    .top img {
        height: 100px;
    }

    .nav-item:link {
        color: black;
        text-decoration: none;
    }

    .nav-item:visited {
        color: black;
        text-decoration: none;
    }

    .nav-item:hover {
        color: grey;
        text-decoration: underline;
    }

    .card {
        border-radius: 30px;
    }

    .source-link:link {
        text-decoration: blue;
    }

    .source-link:visited {
        text-decoration: blue;
    }

    .source-link:hover {
        color: blue;
        text-decoration: underline;
    }
</style>