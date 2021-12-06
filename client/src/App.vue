<template>
  <div id="app">
    <header>
      안녕하세요 <strong>임대인</strong>입니다.
    </header>

    <nav id='nav-div'>
      <h1><a href="https://github.com/dnfwlxo11" target="_blank" class="nav_main">DaeChu</a></h1>
      <div class='nav-items'>
        <ul class='nav-ul'>
          <li class='nav-item'>
            <a class='nav-link' href='#summary'>Summary</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href="#project">Project</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href="#stack">Stack</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <main>
      <section class='section_' id='summary'>
        <div class='wrapper'>
          <h2>제가 누구냐구요?</h2>
          <p class='content'>
            안녕하세요. <br>
            끊임없이 배우며 즐거움을 얻고 <br>
            매일 성장하기위해 노력하는 임대인입니다.
          </p>
        </div>
      </section>
      <section class='section_' id='project'>
        <div class='wrapper'>
          <h2>무엇을 해봤냐구요?</h2>
          <p>여기저기 화려한 것을 주워오는 것보다 습득과 응용을 위주로 프로젝트를 진행하였습니다.<br>(제목에 커서를 올렸을때 손가락이 생긴다면 github에서 소스코드를 보실 수 있습니다.)
          </p>
          <table class="table">
            <div class='table-wrapper'>
              <thead>
                <tr>
                  <td class="table-project">프로젝트</td>
                  <td class='table-intro'>소개</td>
                  <td>기간 및 담당역할</td>
                  <td class="text-preview">추가 정보 <br> (아직 내용 추가중)</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in project" :key="idx">
                  <td>{{item['title']}}</td>
                  <td>
                    <a class='project_link' :href="item['url']" target="_blank">
                      <div><strong>{{item['sub-title']}}</strong></div>
                      <div class='hashtag'>
                        <span v-for="(hashtag, idx) in item['hashtags']" :key="idx">
                          {{hashtag}}
                        </span>
                      </div>
                      <div>
                        <span class="badge" v-for="(badge, idx) in item['badges']" :key="idx" style="margin-right: 5px;">{{badge}}</span>
                      </div>
                    </a>
                  </td>
                  <td>
                    <div>{{item['month']}}</div>
                    <div>{{item['type']}}</div>
                  </td>
                  <td>
                    <img :src="item['image']" alt="preview" style="width: 50px;height: 50px;"
                      onclick="modal_open('project-modal-sertain')">
                    <div id='project-modal-sertain' class='modal'>
                      <div class='modal-content'>
                        <div class='project_summary'>
                          <h1 style="font-size: 40px;">{{item['title']}}</h1>
                          <img v-for="(img, idx) in item['proj_imgs']" :src="img" :key="idx"><br><br>
                          진행 기간 : {{item['proj-info']['period']}} <br>
                          프로젝트 설명 : {{item['proj-info']['content']}} <br>
                          담당 역할 : {{item['proj-info']['part']}} <br>
                          홈페이지 : <a :href="item['proj-info']['homepage']">{{item['proj-info']['homepage']}}</a> <br>
                          사용 기술 : {{item['proj-info']['stack']}} <br><br>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </table>
        </div>
      </section>
      <section class='section_' id='stack'>
        <div class='wrapper'>
          <h2>무엇을 쓸 줄 아냐구요?</h2>
          <p><strong>튜토리얼하고 진짜 내 것인줄 아는 사람이 되지 않으려 노력 중입니다.</strong></p>
          <table class="table table-stacks">
            <thead>
              <tr>
                <td class='table-name'>기술명</td>
                <td class='table-img'>로고</td>
                <td class='table-content'>활용 수준</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in stack" :key="idx">
                <td>{{item['name']}}</td>
                <td>
                  <div class='stack-img'>
                    <img :src="item['src']">
                  </div>
                </td>
                <td class="table-content">
                  <span>{{item['content']}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class='section_' id='stacks_2'>
        <div class='wrapper'>
          <h2>궁금하고 필요해서 공부해 봤어요.</h2>
          <p><strong>아래의 기술들을 사용해본 경험이 있습니다.</strong><br></p>
          <table class="table table-stacks">
            <thead>
              <tr>
                <td class='table-name'>기술명</td>
                <td class='table-img'>로고</td>
                <td class='table-content'>활용 수준</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in stack2" :key="idx">
                <td>{{item['name']}}</td>
                <td>
                  <div class='stack-img'>
                    <img :src="item['src']">
                  </div>
                </td>
                <td class="table-content">
                  <span>{{item['content']}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class='section_' id='contact'>
        <div class='wrapper'>
          <h2>어디로 연락하면 되냐구요?</h2>
          <div class="contact-box">
            <div class="contact-top">
              <h1>임 대 인 </h1>
              <img :src="require(`@/assets/images/face.png`)" />
            </div>
            <div class='contact-bottom'>
              <div class="contact-list">
                <ul class="contact-infor">
                  <li>
                    <span>
                      Email :
                      <a href="mailto:dnfwlxo11@naver.com">
                        <strong>dnfwlxo11@naver.com</strong>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      Phone :
                      <strong>010-xxxx-xxxx</strong>

                    </span>
                  </li>
                  <li>
                    <span>
                      Github :
                      <a href="https://github.com/dnfwlxo11" target="_blank">
                        <strong>github.com/dnfwlxo11</strong>
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      Blog :
                      <a href="https://daechu.tistory.com" target="_blank">
                        <strong>daechu.tistory.com</strong>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        project: [
          {
            'title': '이거 어딨어?',
            'sub-title': 'AI 이미지 특징 추출과 웹을 결합한 특정 물체 찾기 서비스',
            'hashtags': ['#AI특징추출', '#웹서비스'],
            'badges': ['Node.js', 'Python(각종 AI 모델)', 'Vue.js'],
            'month': '(0.5M/M)',
            'url': 'https://github.com/dnfwlxo11/searchCertainFrame',
            'type': '웹, AI모델',
            'image': require('@/assets/images/preview.png'),
            'proj-imgs': [require('@/assets/proj_img/sertain_img.png'), require('@/assets/proj_img/sertain_img2.png')],
            'proj-info': {
              'period': '2021/06/18 ~ 2021/07/09',
              'content': '비디오와 찾고싶은 물체 이미지를 첨부하면 해당하는 부분을 분석하여 찾아줌',
              'part': 'AI 모델에서 이미지 특징을 찾는 레이어 추출 및 웹과 적절한 처리를 하도록 백, 프론트 부분 담당',
              'homepage': 'https://github.com/dnfwlxo11/searchCertainFrame',
              'stack': 'Node.js (웹 백엔드), Vue.js (웹 프론트엔드), Python (AI 모델)'
            }
          },
          {
            'title': 'I-Tub',
            'sub-title': 'IoT, AI를 접목한 맞춤 샤워 서비스',
            'hashtags': ['#IoT', '#AI분류모델', '#AI특징추출'],
            'badges': ['Node.js', 'MySQL', 'Python(sikit-learn)', 'HTML', 'JavaScript', '라즈베리파이'],
            'month': '(3M/M)',
            'url': 'https://github.com/Ultimate-ItubProject/Itub_Web',
            'type': '백엔드, AI모델, IoT연동 개발',
            'image': require('@/assets/images/preview.png'),
            'proj-imgs': [require('@/assets/proj_img/itub_img.png'), require('@/assets/proj_img/itub_img2.png')],
            'proj-info': {
              'period': '2020/04/20 ~ 2020/06/25',
              'content': '웹을 통해 각종 센서들을 제어하고 AI모델을 사용해 본인에게 알맞는 샤워 환경을 세팅하는 서비스',
              'part': 'IoT 센서 데이터를 웹에서 처리하는 백엔드 개발을 맡았으며 예측을 할 AI 모델 작성도 함께 하였습니다.',
              'homepage': 'https://i-tub.herokuapp.com/',
              'stack': 'Node.js (웹), Python (IoT 센서제어, AI 모델), MySQL (사용자 db)'
            }
          },
          {
            'title': '카피',
            'sub-title': '어민들을 위한 병어 자동 분류 서비스',
            'hashtags': ['#AI특징추출', '#웹서비스'],
            'badges': ['#오브젝트디텍션', '#IoT', '#웹서비스', '#크롤링'],
            'month': '(2M/M)',
            'url': 'https://github.com/dnfwlxo11/CategorizingFish_ChosunUniv_fallsemesterProject',
            'type': '백엔드, AI모델, IoT연동 개발',
            'image': require('@/assets/images/preview.png'),
            'proj-imgs': [require('@/assets/proj_img/sertain_img.png'), require('@/assets/proj_img/sertain_img2.png')],
            'proj-info': {
              'period': '2020/07/12 ~ 2021/07/19',
              'content': '내용 무',
              'part': '내용 무',
              'homepage': '내용 무',
              'stack': '내용 무'
            }
          },
          {
            'title': '매치메이커',
            'sub-title': '군인들을 위한 전투 체육 매칭 어플리케이션',
            'hashtags': ['#안드로이드', '#어플리케이션', '#매칭'],
            'badges': ['Android', 'Node.js'],
            'month': '(0.5M/M)',
            'url': 'https://github.com/dnfwlxo11/military-sports-matchmaker',
            'type': '백엔드, UI',
            'image': require('@/assets/images/preview.png'),
            'proj-imgs': [require('@/assets/proj_img/sertain_img.png'), require('@/assets/proj_img/sertain_img2.png')],
            'proj-info': {
              'period': '2017/10/16 ~ 2017/10/20',
              'content': '군인들의 전투 체육 시간에 알맞은 상대 혹은 원하는 경기를 잡도록 도와주는 앱',
              'part': 'Node.js의 api 통신 부분, 앱의 레이아웃',
              'homepage': 'https://github.com/dnfwlxo11/military-sports-matchmaker',
              'stack': 'Node.js (웹 백엔드), Android (앱)'
            }
          }
        ],
        stack: [
          {
            'name': 'Vue.js',
            'src': require('@/assets/images/vue.png'),
            'content': 'Vue를 활용하여 Nodejs 백단과 연결하여 라벨링툴을 만들어보았으며 vuex나 mysql, mongodb 등을 활용하여 적절한 통신 요청, 응답을 처리할 수 있습니다.'
          },
          {
            'name': 'Node.js',
            'src': require('@/assets/images/nodejs.png'),
            'content': 'Express를 활용하여 웹 API 서버를 만들 수 있으며 react, vue와 결합하여 서비스를 구성할 수 잇습니다. 또한 다양한 npm 패키지를 활용하여 적절한 동작, 통신 요청, 응답을 알맞게 처리할 수 있습니다.'
          },
          {
            'name': 'JavaScript',
            'src': require('@/assets/images/js.png'),
            'content': 'ES6 문법을 활용하여 js 언어를 사용하는 라이브러리, 기술을 사용할 수 있습니다. 기본적인 문법은 물론 다양한 토이프로젝트를 진행하며 처음보는 코드도 이해하여 응용할 수 있습니다.'
          },
          {
            'name': 'C++, Python, Java, Html+Css',
            'src': require('@/assets/images/language.png'),
            'content': '다음의 언어들의 기본 문법을 다룰 수 있으며 작성된 코드를 보며 원리를 이해하고 알맞게 응용할 수 있습니다.'
          },
        ],
        stack2: [
          {
            'name': 'Flask',
            'src': require('@/assets/images/flask.png'),
            'content': '텐서플로를 다루며 여러 토이프로젝트에 사용했으며 간단한 API 서버 구현 및 AI 추론 서버로 사용할 수 있습니다.'
          },
          {
            'name': 'Aws',
            'src': require('@/assets/images/aws.png'),
            'content': 'aws s3 서비스를 활용하여 정적 웹 호스팅을 해보았고 웹 서비스의 이미지 제공용으로 사용해보았습니다.'
          },
          {
            'name': 'MongoDB',
            'src': require('@/assets/images/mongo.png'),
            'content': '기본적인 mongodb 문법을 사용할 수 있으며 회원정보, 소켓과 결합한 실시간 데이터 갱신 등에 활용 해보았습니다.'
          },
          {
            'name': 'MySQL',
            'src': require('@/assets/images/mysql.png'),
            'content': '기본적인 SQL 문법을 다룰 수 있으며 웹과 연동하여 회원 정보, 세션 정보를 저장하는 용도로 사용해보았습니다.'
          },
          {
            'name': 'Tensorflow',
            'src': require('@/assets/images/tf.png'),
            'content': '기본적인 텐서플로를 이해하고 있으며 모델을 작성할 수 있습니다. \
                    복잡한 응용까지는 못하나 관련 자료, 논문을 보며 이해하고 구현할 수 있도록 노력하고 있습니다. \
                    여러 토이프로젝트를 진행하며 텍스트, 이미지 분야에 대한 이해를 넓히고 있습니다.'
          },
          {
            'name': 'Docker',
            'src': require('@/assets/images/docker.png'),
            'content': '도커의 기본적인 사용방법을 다룰 수 있으며 여러 컨테이너들을 엮는 docker-compose를 사용하여 개발 환경을 구성할 수 있습니다.'
          },
        ]
      }
    },
    methods: {
      modal_open(name) {
        let modal = document.getElementById(name);

        modal.style.display = "block";
      },
    }
  }
</script>

<style lang="scss">
  @import url("./assets/css/main.css");
  @import url("./assets/css/proj.css");
  @import url("./assets/css/style.css");
</style>