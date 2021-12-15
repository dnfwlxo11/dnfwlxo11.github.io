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
                                    <h4><strong>𝐂𝐥𝐨𝐮𝐝</strong></h4>
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
                                    <h4><strong>𝐂𝐥𝐨𝐮𝐝</strong></h4>
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
                            <h4><strong>𝐂𝐥𝐨𝐮𝐝</strong></h4>
                            <li>Docker</li> <br>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="col-md-6 pt-3">
                            <div class="card p-3">
                                <h5><strong>공부! 관심!</strong></h5>
                                <p class="imoji">🤨</p> <br>
                                <h4><strong>𝐖𝐞𝐛</strong></h4>
                                <li>Spring</li>
                                <li>React.js</li> <br>
                                <h4><strong>𝐃𝐁</strong></h4>
                                <li>PostgreSQL</li> <br>
                                <h4><strong>𝐂𝐥𝐨𝐮𝐝</strong></h4>
                                <li>AWS</li> <br>
                            </div>
                        </div>
                    </div>
                </div>
                <br><br><br>
                <div class="line mb-3"></div>
                <br><br>

                <div class="">
                    <div class="ml-auto mr-auto">
                        <div class="mb-5">
                            <h1><strong>𝙒𝙃𝘼𝙏</strong></h1>
                        </div>
                        <project v-for="(item, idx) in projects" :key="idx" :content="item"></project>
                    </div>
                </div>
                <div v-html="content"></div>

            </div>
            <button @click="printt()">
                wer
            </button>
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
                projects: [{
                    name: 'I-Tub',
                    content: '내용',
                    func: '회원관리, AI모델과 연동, IoT 센서와 연동',
                    period: '2020.04.20 ~ 2020.06.25',
                    github: 'https://github.com/Ultimate-ItubProject/Itub_Web',
                    front: 'html, css',
                    back: 'Node.js',
                    deploy: 'Heroku'
                }],
                content: '<strong class="text-danger">강조</strong> 약하게'
            }
        },
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
    }

    .navbar {
        background-color: lightgray;
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

    a:link {
        color: black;
        text-decoration: none;
    }

    a:visited {
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: grey;
        text-decoration: underline;
    }

    .card {
        border-radius: 30px;
    }
</style>