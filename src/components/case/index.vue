<template>
  <div>
    <header>
      <div class="header">
        <div class="beijing">
          <h2 class>
            <a @click="$router.push('/')">
              <img style="border: 0;" src="../../assets/wangqi_ysj/logo.png" alt="网奇" border="0" />
            </a>
          </h2>
          <div class="nav">
            <p>
              <em></em>
              <em></em>
              <em></em>
            </p>
          </div>
          <div class="menu">
            <ul>
              <li class="n_index">
                <a class @click="$router.push('/')">
                  <em>首页</em>
                  <span>HOME</span>
                </a>
              </li>
              <li class="n_about">
                <a @click="$router.push('/about')">
                  <em>关于我们</em>
                  <span>ABOUT</span>
                </a>
              </li>
              <li class="n_fuwu">
                <a @click="$router.push('/service')">
                  <em>五赞服务</em>
                  <span>SERVICE</span>
                </a>
              </li>
              <li class="n_case">
                <a @click="$router.push('/case')" class="hover">
                  <em>案例欣赏</em>
                  <span>CASE</span>
                </a>
              </li>
              <li class="n_coll">
                <a @click="$router.push('/secondary')">
                  <em>APP学院</em>
                  <span>COLLEGE</span>
                </a>
              </li>
              <li class="n_contact">
                <a @click="$router.push('/contact')">
                  <em>联系我们</em>
                  <span>CONTACT</span>
                </a>
              </li>
            </ul>
            <div class="headtel">
              <img src="../../assets/wangqi_ysj/headtel.png" /> 服务热线：400-0335-887
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div id="mobileNav" class="navOn">
          <div class="dropbtn isActive">
            <span></span>
          </div>
          <div class="mobileDropdown">
            <div class="mobileDropdown-content">
              <ul>
                <li class="n_index">
                  <a class="hover" @click="$router.push('/')">
                    <em>首页</em>
                    <span>HOME</span>
                  </a>
                </li>
                <li class="n_about">
                  <a @click="$router.push('/about')">
                    <em>关于我们</em>
                    <span>ABOUT</span>
                  </a>
                </li>
                <li class="n_fuwu">
                  <a @click="$router.push('/service')">
                    <em>五赞服务</em>
                    <span>SERVICE</span>
                  </a>
                </li>
                <li class="n_case">
                  <a @click="$router.push('/case')">
                    <em>案例欣赏</em>
                    <span>CASE</span>
                  </a>
                </li>
                <li class="n_coll">
                  <a @click="$router.push('/secondary')">
                    <em>APP学院</em>
                    <span>COLLEGE</span>
                  </a>
                </li>
                <li class="n_contact">
                  <a @click="$router.push('/contact')">
                    <em>联系我们</em>
                    <span>CONTACT</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--<div class="head_fx"></div>-->

    <div class="sg_s_about">
      <div class="container">
        <div class="case-yop">
          <em
            class="wow zoomInUp animated animated"
            style="visibility: visible; animation-name: zoomInUp;"
          >案例欣赏</em>
          <p
            class="wow zoomInDown animated animated"
            data-wow-delay=".4s"
            style="visibility: visible; animation-delay: 0.4s; animation-name: zoomInDown;"
          >CASE APPRECIATION</p>
        </div>
        <div class="case-list">
          <ul>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="0.5s"
              style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;"
            >
              <a href="./case.html#">
                <div class="inyro">
                  <h3>电商类</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="1s"
              style="visibility: visible; animation-delay: 1s; animation-name: fadeInLeft;"
            >
              <a href="./case.html#">
                <div class="inyro">
                  <h3>教育类</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="1.5"
              style="visibility: visible; animation-delay: 1.5s; animation-name: fadeInRight;"
            >
              <a href="./case.html#">
                <div class="inyro">
                  <h3>金融类</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="2"
              style="visibility: visible; animation-delay: 2s; animation-name: fadeInRight;"
            >
              <a href="./case.html#">
                <div class="inyro">
                  <h3>美容类</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="2.5"
              style="visibility: visible; animation-delay: 2.5s; animation-name: fadeInRight;"
            >
              <a href="./case.html#">
                <div class="inyro">
                  <h3>健康类</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="3"
              style="visibility: visible; animation-delay: 3s; animation-name: fadeInRight;"
            >
              <a href="./case.html#">
                <div class="inyro">
                  <h3>医疗类</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="3.5"
              style="visibility: visible; animation-delay: 3.5s; animation-name: fadeInRight;"
            >
              <a href="./case.html#">
                <div class="inyro">
                  <h3>其他类</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="class-Online-retailers case-list-all">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated"
            style="visibility: hidden; animation-name: none;"
          >
            <img src="../../assets/wangqi_ysj/Online-retailers-title.png" alt />&nbsp;电商类
          </strong>
          <big
            class="wow fadeInDown animated animated"
            data-wow-delay="500ms"
            style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
          >Electronic business category</big>
        </div>
        <div class="mcon">
          <ul>
            <li
              class="wow fadeInLeft animated animated animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/dianshang1.png" />
            </li>
            <li
              class="wow fadeInLeft animated animated animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/dianshang2.png" />
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/dianshang3.png" />
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/dianshang4.png" />
            </li>
          </ul>
          <div class="info">
            <a @click="$router.push('/case')">
              查看更多&nbsp;
              <img src="../../assets/wangqi_ysj/more.png" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-all1">
      <div class="class-education case-list-all">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/education-title.png" alt />&nbsp;教育类
            </strong>
            <big
              class="wow fadeInDown animated animated"
              data-wow-delay="500ms"
              style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
            >Education category</big>
          </div>
          <div class="mcon">
            <ul>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jiaoyu1.png" />
              </li>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jiaoyu2.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jiaoyu3.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jiaoyu4.png" />
              </li>
            </ul>
            <div class="info">
              <a @click="$router.push('/case')">
                查看更多&nbsp;
                <img src="../../assets/wangqi_ysj/more.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="class-Finance case-list-all">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/Finance-title.png" alt />&nbsp;金融类
            </strong>
            <big
              class="wow fadeInDown animated animated"
              data-wow-delay="500ms"
              style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
            >Financial category</big>
          </div>
          <div class="mcon">
            <ul>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jinrong1.png" />
              </li>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jinrong2.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jinrong3.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jinrong4.png" />
              </li>
            </ul>
            <div class="info">
              <a @click="$router.push('/case')">
                查看更多&nbsp;
                <img src="../../assets/wangqi_ysj/more.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="class-Cosmetology case-list-all">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/Cosmetology-title.png" alt />&nbsp;美容类
            </strong>
            <big
              class="wow fadeInDown animated animated"
              data-wow-delay="500ms"
              style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
            >Beauty category</big>
          </div>
          <div class="mcon">
            <ul>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/mei1.png" />
              </li>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/mei2.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/mei3.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/mei4.png" />
              </li>
            </ul>
            <div class="info">
              <a @click="$router.push('/case')">
                查看更多&nbsp;
                <img src="../../assets/wangqi_ysj/more.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-all2">
      <div class="class-Healthy case-list-all">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/Healthy-title.png" alt />&nbsp;健康类
            </strong>
            <big
              class="wow fadeInDown animated animated"
              data-wow-delay="500ms"
              style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
            >Health category</big>
          </div>
          <div class="mcon">
            <ul>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jiankang1.png" />
              </li>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jiankang2.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jiankang3.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/jiankang4.png" />
              </li>
            </ul>
            <div class="info">
              <a @click="$router.push('/case')">
                查看更多&nbsp;
                <img src="../../assets/wangqi_ysj/more.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="class-Medical-care case-list-all">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/Medical-title.png" alt />&nbsp;医疗类
            </strong>
            <big
              class="wow fadeInDown animated animated"
              data-wow-delay="500ms"
              style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
            >Medical category</big>
          </div>
          <div class="mcon">
            <ul>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/yiliao1.png" />
              </li>
              <li
                class="wow fadeInLeft animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/yiliao2.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/yiliao3.png" />
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                style="visibility: hidden; animation-name: none;"
              >
                <img src="../../assets/wangqi_ysj/yiliao4.png" />
              </li>
            </ul>
            <div class="info">
              <a @click="$router.push('/case')">
                查看更多&nbsp;
                <img src="../../assets/wangqi_ysj/more.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="class-Other-care case-list-all">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated"
            style="visibility: hidden; animation-name: none;"
          >
            <img src="../../assets/wangqi_ysj/other-title.png" alt />&nbsp;其他类
          </strong>
          <big
            class="wow fadeInDown animated animated"
            data-wow-delay="500ms"
            style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
          >Other categories</big>
        </div>
        <div class="mcon">
          <ul>
            <li
              class="wow fadeInLeft animated animated animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/other01.png" />
            </li>
            <li
              class="wow fadeInLeft animated animated animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/other02.png" />
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/other03.png" />
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/other04.png" />
            </li>
          </ul>
          <div class="info">
            <a @click="$router.push('/case')">
              查看更多&nbsp;
              <img src="../../assets/wangqi_ysj/more.png" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="mobile_foot">
        <div class="mobile_foot1">
          <p class="fot-top">
            网奇 - 专注于为每一个客户打造自己的 APP 艺术品
            <br />Copyright © 秦皇岛网奇网络科技有限公司 冀ICP备11009660号-1
          </p>
          <p>APP 运营学院公众号：zxw1788</p>
        </div>
        <div class="mobile_foot2">
          <a href="tel:400-0335-887">
            <img src="../../assets/wangqi_ysj/mobile_foot_i1.png" /> 电话咨询
          </a>
          <a href="http://p.qiao.baidu.com/cps/chat?siteId=8958442&amp;userId=5935590" class="m_f1">
            <img src="../../assets/wangqi_ysj/mobile_foot_i2.png" /> 在线客服
          </a>
        </div>

        <div class="mobile_foot3">
          <a href="javascript:void(0)" id="gotop">
            <img src="../../assets/wangqi_ysj/mobile_foot.png" />
          </a>
        </div>
      </div>
      <div class="foot-list">
        <div class="foot-lc beijing">
          <ul>
            <li class="fot1">
              <p>100倍故障时长赔偿</p>
            </li>
            <li class="fot2">
              <p>7×24小时售后支持</p>
            </li>
            <li class="fot3">
              <p>1V1专职客服</p>
            </li>
            <li class="fot4">
              <p>免费服务器安全维护</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="foot_pc">
        <dl class="beijing">
          <dd
            class="f_p1 wow flipInX animated animated"
            data-wow-delay="10ms"
            style="visibility: hidden; animation-delay: 10ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/case')">关于网奇</a>
            </h3>
            <p>
              <a href="./case.html#">公司介绍</a>
              <a href="./case.html#">公司愿景</a>
              <a href="./case.html#">服务标准</a>
              <a href="./case.html#">联系我们</a>
            </p>
          </dd>
          <dd
            class="f_p2 wow flipInX animated animated"
            data-wow-delay="250ms"
            style="visibility: hidden; animation-delay: 250ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/case')">热点问题</a>
            </h3>
            <p>
              <a href="./case.html#">苹果账户</a>
              <a href="./case.html#">安卓收费</a>
              <a href="./case.html#">越狱安装</a>
              <a href="./case.html#">开发时间</a>
            </p>
          </dd>
          <dd
            class="f_p3 wow flipInX animated animated"
            data-wow-delay="450ms"
            style="visibility: hidden; animation-delay: 450ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/case')">运营指导</a>
            </h3>
            <p>
              <a href="./case.html#">如何推广</a>
              <a href="./case.html#">如何裂变</a>
              <a href="./case.html#">如何锁客</a>
              <a href="./case.html#">如何复消</a>
            </p>
          </dd>
          <dd
            class="f_p4 wow flipInX animated animated"
            data-wow-delay="650ms"
            style="visibility: hidden; animation-delay: 650ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/case')">服务行业</a>
            </h3>
            <p>
              <a href="./case.html#">商城购物</a>
              <a href="./case.html#">医疗美业</a>
              <a href="./case.html#">教育培训</a>
              <a href="./case.html#">金融区块</a>
            </p>
          </dd>
          <dt>
            <p
              class="wow rollIn animated animated"
              data-wow-delay="550ms"
              title="400电话：400-0335-887"
              style="visibility: hidden; animation-delay: 550ms; animation-name: none;"
            >
              <em>
                <img src="../../assets/wangqi_ysj/index_f5.png" />
              </em>
              <span>电话：400-0335-887</span>
            </p>
            <p
              class="wow lightSpeedIn animated animated"
              data-wow-delay="800ms"
              style="visibility: hidden; animation-delay: 800ms; animation-name: none;"
            >
              <em>
                <img src="../../assets/wangqi_ysj/index_f8.png" />
              </em>
              <span>
                QQ：
                <a
                  href="http://wpa.qq.com/msgrd?v=3&amp;uin=97653328&amp;site=qq&amp;menu=yes"
                  title="qq咨询：97653328"
                >97653328</a>
                <a
                  href="http://wpa.qq.com/msgrd?v=3&amp;uin=97653324&amp;site=qq&amp;menu=yes"
                  title="qq咨询：97653324"
                >97653324</a>
              </span>
            </p>
            <p
              class="wow lightSpeedIn animated animated"
              data-wow-delay="1000ms"
              title="座机：0335-3227767"
              style="visibility: hidden; animation-delay: 1000ms; animation-name: none;"
            >
              <em>
                <img src="../../assets/wangqi_ysj/index_f9.png" />
              </em>
              <span>座机：0335-3227767</span>
            </p>
          </dt>
        </dl>
      </div>
      <div class="foot">
        <div class="beijing">
          <dl class="foot1">
            <dt>
              <div class="dt-all">
                <img src="../../assets/wangqi_ysj/wq.jpg" alt />
                <div class="foot2">
                  <p class="fot-top">
                    网奇 - 专注于为每一个客户打造自己的 APP 艺术品
                    <br />Copyright © 秦皇岛网奇网络科技有限公司 冀ICP备11009660号-1
                  </p>
                  <p>APP 运营学院公众号：zxw1788</p>
                </div>
              </div>
            </dt>
            <dd>
              <p>
                <img src="../../assets/wangqi_ysj/foot_1.png" />
                <img src="../../assets/wangqi_ysj/foot_2.png" />
              </p>
            </dd>
          </dl>
        </div>
        <div style="width:300px;margin:0 auto; padding:20px 0;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
      new window.WOW().init();
    }
    window.$("#mobileNav").on("click", ".dropbtn", function() {
      window.$(this).toggleClass("isActive");
      if (window.$(this).hasClass("isActive")) {
        window.activen = 1;
        window.$("#mobileNav").addClass("navOn");
        window.$("header").addClass("activehead");

        if (window.$(window).scrollTop() < 10) {
          window.$(".head_fx").addClass("activehead");
        }

        setTimeout(function() {
          window.activen = 0;
        }, 500);
      } else {
        window.$("#mobileNav").removeClass("navOn");
        window.$("header").removeClass("activehead");
        window.$(".head_fx").removeClass("activehead");
      }
    });
    window.$("#mobileNav .mobileWarp").click(function() {
      window.$("#mobileNav .dropbtn").removeClass("isActive");
      window.$("#mobileNav").removeClass("navOn");
      window.$("header").removeClass("activehead");
      window.$(".head_fx").removeClass("activehead");
    });
    window.$(".menu a").removeClass("hover");
    window
      .$(".menu .n_case")
      .children("a")
      .addClass("hover");
    window.$(".card-item").hover(
      function() {
        window.$(".card-item").removeClass("active");
        window.$(this).addClass("active");
      },
      function() {}
    );
    window.$(window).on("scroll", function() {
      var st = window.$(document).scrollTop();
      if (st > 64) {
        window.$(".header").addClass("header-bg");
      } else {
        window.$(".header").removeClass("header-bg");
      }
    });
    new window.Swiper(".rotary", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    new window.Swiper(".banners", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    window.jQuery(document).ready(function() {
      window.$(".dnSlide-main").each(function(index, el) {
        var setting = {
          response: true,
          afterClickBtnFn: function() {}
        };
        //setting.autoPlay  =  true ;
        window.$(el).dnSlide(setting);
      });
    });
    new window.Swiper(".team", {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    new window.Swiper(".teams", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    window.$(".art-right img").on("click", function() {
      window.layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        area: ["70%", "70%"],
        shadeClose: true, //点击遮罩关闭
        content:
          '<video id="videoElement" controls="controls" autoplay="autoplay" src="http://pvugjdona.bkt.clouddn.com/zanshang.mp4"></video>'
      });
    });
  }
};
</script>
<style src="../../assets/wangqi_ysj/layer.css"></style>
<style src="../../assets/wangqi_ysj/case.css"></style>

<style scoped>
</style>