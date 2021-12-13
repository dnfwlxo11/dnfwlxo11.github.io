<template>
  <div class="home">
    <div>
      <div class="top mt-3 mb-3">
        <div class="row d-flex align-items-center">
          <div class="col-2 text-left p-0 m-0 pl-5">
            <img :src="require('@/assets/jujube.png')">
          </div>
          <div class="col-8">
            <h1><strong>Hi, I'm Daein</strong></h1>
          </div>
          <div class="col-2 p-0 m-0 pr-5 text-right">
            <div>
              <a href="https://github.com/dnfwlxo11" class="mr-3"><i class="mdi mdi-github"></i></a>
              <a href="https://daechu.tistory.com/" class="mr-3"><i class="mdi mdi-post-outline"></i></a>
              <a href="mailto:dnfwlxo11@gmail.com" class="mr-3"><i class="mdi mdi-email-multiple-outline"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="contents mt-5 mb-5 text-center">
        <br><br><br>
        <div>
          <h4>안녕하세요 <strong>임대인입니다.</strong></h4>
          끊임없이 배우며 즐거움을 얻고 성장에 쾌감을 얻습니다.
        </div>
        <br><br><br>
        <h5>
          <strong>자바스크립트 풀스택 개발자</strong>로 일하고 있으며 <br>
          자바, 클라우드도 관심있게 공부하고 있습니다.
        </h5>
        <br><br>
        <div class="stacks">
          <div class="row pt-3">
            <div class="col-md-6">
              <strong>개발 스택</strong>
            </div>
            <div class="col-md-6">
              <strong>관심있는 영역</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style>
  .stacks {
    height: 500px;
    width: 35%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0.5, 0.5);
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  .top {
    height: 100px;

  }

  .line {
    border-bottom: 2px solid grey;
    opacity: 0.2;
  }

  .top img {
    height: 100px;
  }

  i {
    font-size: 40px;
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
</style>