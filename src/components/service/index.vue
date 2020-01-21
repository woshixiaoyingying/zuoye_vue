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
                <a @click="$router.push('/service')" class="hover">
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
                <a @click="$router.push('./secondary')">
                  <em>APP学院</em>
                  <span>COLLEGE</span>
                </a>
              </li>
              <li class="n_contact">
                <a @click="$router.push('./contact')">
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
                  <a @click="$router.push('./secondary')">
                    <em>APP学院</em>
                    <span>COLLEGE</span>
                  </a>
                </li>
                <li class="n_contact">
                  <a @click="$router.push('./contact')">
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
        <div class="about-yop">
          <em
            class="wow zoomInUp animated animated"
            style="visibility: visible; animation-name: zoomInUp;"
          >五赞服务</em>
          <p
            class="wow zoomInDown animated animated"
            data-wow-delay=".4s"
            style="visibility: visible; animation-delay: 0.4s; animation-name: zoomInDown;"
          >ABOUT US</p>
        </div>
        <div class="shipin-service">
          <img src="../../assets/wangqi_ysj/vider-nth.png" alt />
        </div>
        <div class="about-list">
          <ul>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="0.5s"
              style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;"
            >
              <a href="./service.html#">
                <div class="inyro">
                  <h3>我们的服务</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="1s"
              style="visibility: visible; animation-delay: 1s; animation-name: fadeInLeft;"
            >
              <a href="./service.html#">
                <div class="inyro">
                  <h3>五赞服务体系</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="1.5"
              style="visibility: visible; animation-delay: 1.5s; animation-name: fadeInRight;"
            >
              <a href="./service.html#">
                <div class="inyro">
                  <h3>客户服务评价</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Our-services">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >我们的服务</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >Our Services</big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >诚心+匠心=我们的服务</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            Sincerity + Ingenuity = Our
            Service
          </small>
        </div>
        <ul class="fw-list">
          <li>
            <div
              class="fu-tu wow slideInLeft animated animated"
              style="visibility: visible; animation-name: slideInLeft;"
            >
              <img src="../../assets/wangqi_ysj/jx2.png" alt />
            </div>
          </li>
          <li>
            <div
              class="fu-tu wow slideInRight animated animated"
              style="visibility: visible; animation-name: slideInRight;"
            >
              <img src="../../assets/wangqi_ysj/jx2.png" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="Rotary-sowing Rotary-sowing-about">
      <div class>
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >五赞服务体系</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >Five Zan Service System</big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >全国独家五赞服务体系，只为给您最顶端的服务体验</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            Ational exclusive five
            praises service system, only to give you the top service experience
          </small>
        </div>

        <div class="mcon hidden-xs" style>
          <div class="dnSlide">
            <div class="dnSlide-main dn-response done" style="height: 650px;">
              <ul class="dnSlide-list">
                <li
                  class="dnSlide-item active"
                  style="width: 708.95px; height: 650px; left: 290px; z-index: 2;"
                >
                  <div class="slideC">
                    <img
                      class="slide-img"
                      src="../../assets/wangqi_ysj/Rotary-sowing-about-logo1.png"
                    />
                    <div class="slide-z">
                      <div class="slide-c">
                        <div class="slid-border">
                          <h3>美工赞</h3>
                          <span>PRAISE TO THE WORKERS</span>
                          <p>我们开发设计的每一款APP，都是一件艺术品，这个是我们公司服务的最高宗旨。在美工设计上达到您100%满意为止，每一页或每一个细节，我们都要精雕细琢，您不用说，我们自己都会去做。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="dnSlide-item"
                  style="width: 283.6px; height: 260px; z-index: 1; opacity: 0.5; left: 860.4px; top: 195px;"
                >
                  <div class="slideC">
                    <img
                      class="slide-img"
                      src="../../assets/wangqi_ysj/Rotary-sowing-about-logo2.png"
                    />
                    <div class="slide-z">
                      <div class="slide-c">
                        <div class="slid-border">
                          <h3>速度赞</h3>
                          <span>SPEED PRAISE</span>
                          <p>每一次页面切换，每一次点击操作；不管是10个人同时使用，还是几十万人同时使用，都对APP使用的操作速度上都有极致要求；我们花费很多精力，对每次操作的速度研发，都比其他同行公司要做的多。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="dnSlide-item"
                  style="width: 113.44px; height: 104px; z-index: 0; opacity: 0; left: 1175.56px; top: 273px;"
                >
                  <div class="slideC">
                    <img
                      class="slide-img"
                      src="../../assets/wangqi_ysj/Rotary-sowing-about-logo3.png"
                    />
                    <div class="slide-z">
                      <div class="slide-c">
                        <div class="slid-border">
                          <h3>体验赞</h3>
                          <span>EXPERIENCE PRAISE</span>
                          <p>一套复杂的操作流程，能否用最少的几步完成，让用户使用简单；每一次操作体验都是用户所想，用户在使用APP的整个过程中，是否愉悦，是否够傻瓜。这才是一个好的APP，用户体验好，才真的好。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="dnSlide-item"
                  style="width: 113px; height: 104px; z-index: 0; opacity: 0; left: 0px; top: 273px;"
                >
                  <div class="slideC">
                    <img
                      class="slide-img"
                      src="../../assets/wangqi_ysj/Rotary-sowing-about-logo4.png"
                    />
                    <div class="slide-z">
                      <div class="slide-c">
                        <div class="slid-border">
                          <h3>运营赞</h3>
                          <span>OPERATIONAL PRAISE</span>
                          <p>很多开发APP的客户，大部分都是APP运营新手，很多基本知识需要学习，或者更需要一些推广运营方面的专业指导。为此网奇花费很多心思，准备了线上APP运营学院和专业的运营专家为您人工指导。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="dnSlide-item"
                  style="width: 282.5px; height: 260px; z-index: 1; opacity: 0.5; left: 145px; top: 195px;"
                >
                  <div class="slideC">
                    <img
                      class="slide-img"
                      src="../../assets/wangqi_ysj/Rotary-sowing-about-logo5.png"
                    />
                    <div class="slide-z">
                      <div class="slide-c">
                        <div class="slid-border">
                          <h3>服务赞</h3>
                          <span>SERVICE PRAISE</span>
                          <p>
                            <b>时间：</b>每位客户服务时间都是24小时；
                            <b>态度：</b>每次服务的沟通，我们都是耐心的热情服务；
                            <b>专业：</b>
                            我们不会配备新人，每个服务人员都是APP多年经验的专家。
                            <b>及时：</b>每次线上沟通回复都在第一时间回复。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="dnSlide-btn dnSlide-left-btn" style="width: 290px; height: 100%;"></div>
              <div class="dnSlide-btn dnSlide-right-btn" style="width: 290px; height: 100%;"></div>
            </div>
          </div>
        </div>

        <div
          class="swiper-container rotary visible-xs-block swiper-container-cube swiper-container-3d swiper-container-initialized swiper-container-horizontal"
          style="cursor: grab;"
        >
          <div
            class="swiper-wrapper"
            style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);"
          >
            <div class="swiper-slide">
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-about-logo1.png" />
                    <h3>美工赞</h3>
                    <span>PRAISE TO THE WORKERS</span>
                    <p>
                      我们开发设计的每一款APP，都是一件艺术品，这个是我们公司服务的最高宗旨。
                      在美工设计上达到您100%满意为止，每一页或每一个细节，我们都要精雕细琢，您不用说，我们自己都会去做。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-about-logo2.png" />
                    <h3>速度赞</h3>
                    <span>SPEED PRAISE</span>
                    <p>
                      每一次页面切换，每一次点击操作；不管是10个人同时使用，还是几十万人同时使用，都对APP使用的操作速度上都有极致要求；
                      我们花费很多精力，对每次操作的速度研发，都比其他同行公司要做的多。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-about-logo3.png" />
                    <h3>体验赞</h3>
                    <span>EXPERIENCE PRAISE</span>
                    <p>
                      一套复杂的操作流程，能否用最少的几步完成，让用户使用简单；每一次操作体验都是用户所想，
                      用户在使用APP的整个过程中，是否愉悦，是否够傻瓜。这才是一个好的APP，用户体验好，才真的好。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-about-logo4.png" />
                    <h3>运营赞</h3>
                    <span>OPERATIONAL PRAISE</span>
                    <p>
                      很多开发APP的客户，大部分都是APP运营新手，很多基本知识需要学习，或者更需要一些推广运营方面的专业指导。
                      为此网奇花费很多心思，准备了线上APP运营学院和专业的运营专家为您人工指导。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-about-logo5.png" />
                    <h3>服务赞</h3>
                    <span>SERVICE PRAISE</span>
                    <p>
                      <b>时间：</b>每位客户服务时间都是24小时；
                      <b>态度：</b>每次服务的沟通，我们都是耐心的热情服务；
                      <b>专业：</b>
                      我们不会配备新人，每个服务人员都是APP多年经验的专家。
                      <b>及时：</b>每次线上沟通回复都在第一时间回复。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-cube-shadow"></div>
          </div>

          <div
            class="swiper-button-next"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            aria-disabled="false"
          ></div>
          <div
            class="swiper-button-prev"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            aria-disabled="false"
          ></div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </div>
    <div class="evaluate-customer">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >客户服务评价</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >
            Customer Service
            Evaluation
          </big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >客户说好，这才是我们的目标</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            Customers say yes, that's our
            goal
          </small>
        </div>
        <div class="mcon">
          <div class="evaluate-left">
            <div class="evaluate-all">
              <div
                class="swiper-container evaluate swiper-container-initialized swiper-container-horizontal"
              >
                <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
                  <div class="swiper-slide swiper-slide-active" style="width: 319px;">
                    <div
                      class="intro"
                    >网奇团队非常努力地工作，以确保高水平的质量。嘿，赶上最后期限。他们很灵活，能够快速响应不断变化的需求。我们已经和他们合作过很多项目，我们一定会继续合作的。”</div>
                    <div class="info">
                      <div class="info-all">
                        <div class="pic">
                          <img src="../../assets/wangqi_ysj/evaluate-img.jpg" alt />
                        </div>
                        <div class="evaluate-message">
                          <h4>客户姓名</h4>
                          <p>@1233333</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-next" style="width: 319px;">
                    <div
                      class="intro"
                    >网奇团队非常努力地工作，以确保高水平的质量。嘿，赶上最后期限。他们很灵活，能够快速响应不断变化的需求。我们已经和他们合作过很多项目，我们一定会继续合作的。”</div>
                    <div class="info">
                      <div class="info-all">
                        <div class="pic">
                          <img src="../../assets/wangqi_ysj/evaluate-img.jpg" alt />
                        </div>
                        <div class="evaluate-message">
                          <h4>客户姓名</h4>
                          <p>@1233333</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide" style="width: 319px;">
                    <div
                      class="intro"
                    >网奇团队非常努力地工作，以确保高水平的质量。嘿，赶上最后期限。他们很灵活，能够快速响应不断变化的需求。我们已经和他们合作过很多项目，我们一定会继续合作的。”</div>
                    <div class="info">
                      <div class="info-all">
                        <div class="pic">
                          <img src="../../assets/wangqi_ysj/evaluate-img.jpg" alt />
                        </div>
                        <div class="evaluate-message">
                          <h4>客户姓名</h4>
                          <p>@1233333</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide" style="width: 319px;">
                    <div
                      class="intro"
                    >网奇团队非常努力地工作，以确保高水平的质量。嘿，赶上最后期限。他们很灵活，能够快速响应不断变化的需求。我们已经和他们合作过很多项目，我们一定会继续合作的。”</div>
                    <div class="info">
                      <div class="info-all">
                        <div class="pic">
                          <img src="../../assets/wangqi_ysj/evaluate-img.jpg" alt />
                        </div>
                        <div class="evaluate-message">
                          <h4>客户姓名</h4>
                          <p>@1233333</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
                <!-- Add Arrows -->
                <div
                  class="swiper-button-next"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                ></div>
                <div
                  class="swiper-button-prev swiper-button-disabled"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                ></div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
              </div>
            </div>
          </div>
          <div class="evaluate-right">
            <div class="right-all">
              <h2>为了您更好的使用我们在不懈努力</h2>
              <span>客户喜欢我们的五赞服务，安全的后台，世界一流的客户服务。</span>
            </div>
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
            class="f_p1 wow flipInX animated animated animated"
            data-wow-delay="10ms"
            style="visibility: visible; animation-delay: 10ms; animation-name: flipInX; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/service')">关于网奇</a>
            </h3>
            <p>
              <a href="./service.html#">公司介绍</a>
              <a href="./service.html#">公司愿景</a>
              <a href="./service.html#">服务标准</a>
              <a href="./service.html#">联系我们</a>
            </p>
          </dd>
          <dd
            class="f_p2 wow flipInX animated animated animated"
            data-wow-delay="250ms"
            style="visibility: visible; animation-delay: 250ms; animation-name: flipInX; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/service')">热点问题</a>
            </h3>
            <p>
              <a href="./service.html#">苹果账户</a>
              <a href="./service.html#">安卓收费</a>
              <a href="./service.html#">越狱安装</a>
              <a href="./service.html#">开发时间</a>
            </p>
          </dd>
          <dd
            class="f_p3 wow flipInX animated animated animated"
            data-wow-delay="450ms"
            style="visibility: visible; animation-delay: 450ms; animation-name: flipInX; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/service')">运营指导</a>
            </h3>
            <p>
              <a href="./service.html#">如何推广</a>
              <a href="./service.html#">如何裂变</a>
              <a href="./service.html#">如何锁客</a>
              <a href="./service.html#">如何复消</a>
            </p>
          </dd>
          <dd
            class="f_p4 wow flipInX animated animated animated"
            data-wow-delay="650ms"
            style="visibility: visible; animation-delay: 650ms; animation-name: flipInX; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/service')">服务行业</a>
            </h3>
            <p>
              <a href="./service.html#">商城购物</a>
              <a href="./service.html#">医疗美业</a>
              <a href="./service.html#">教育培训</a>
              <a href="./service.html#">金融区块</a>
            </p>
          </dd>
          <dt>
            <p
              class="wow rollIn animated animated animated"
              data-wow-delay="550ms"
              title="400电话：400-0335-887"
              style="visibility: visible; animation-delay: 550ms; animation-name: rollIn;"
            >
              <em>
                <img src="../../assets/wangqi_ysj/index_f5.png" />
              </em>
              <span>电话：400-0335-887</span>
            </p>
            <p
              class="wow lightSpeedIn animated animated animated"
              data-wow-delay="800ms"
              style="visibility: visible; animation-delay: 800ms; animation-name: lightSpeedIn;"
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
              class="wow lightSpeedIn animated animated animated"
              data-wow-delay="1000ms"
              title="座机：0335-3227767"
              style="visibility: visible; animation-delay: 1000ms; animation-name: lightSpeedIn;"
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

    <div class="layui-layer-move"></div>
  </div>
</template>

<script>
export default {
  mounted() {
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
      .$(".menu .n_fuwu")
      .children("a")
      .addClass("hover");
    if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
      new window.WOW().init();
    }
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

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
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
    window.$(".shipin-service img").on("click", function() {
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

    new window.Swiper(".evaluate", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style src="../../assets/wangqi_ysj/layer(1).css"></style>
<style src="../../assets/wangqi_ysj/service.css"></style>
<style scoped>
@media only screen and (min-width: 48em) {
  .head_fx {
    display: none;
  }
}

.noswap {
  position: fixed;
}

#videoElement {
  width: 100%;
  height: 100%;
}

.layui-layer-content {
  height: auto !important;
}

.layui-layer-setwin {
  right: 50px !important;
  top: 50px !important;
}

.layui-layer-setwin .layui-layer-close2 {
  color: #fff;
  border-radius: 12px;
  line-height: 20px;
  text-align: center;
  height: 50px;
  width: 50px;
  font-size: 30px;
  padding: 1px;
  top: -10px;
  right: -10px;
  position: absolute;
  background: none;
  text-decoration: none;
  opacity: 0.7;
}

.layui-layer-setwin .layui-layer-close2::before {
  content: "\2716";
}

.layui-layer {
  background: none;
}

.layui-layer {
  background: none;
  box-shadow: none;
}

.layui-layer-shade {
  opacity: 0.8 !important;
}

@media only screen and (max-width: 767px) {
  .layer-anim {
    height: auto !important;
  }

  .layui-layer {
    background: none !important;
    box-shadow: none !important;
  }

  .layui-layer-setwin .layui-layer-close2 {
    font-size: 28px;
  }

  .layui-layer-setwin {
    right: 35px !important;
    top: 35px !important;
  }

  .layui-layer-shade {
    opacity: 0.8 !important;
  }
}
</style>