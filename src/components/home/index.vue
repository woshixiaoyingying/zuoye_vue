<template>
  <div>
    <header>
      <div class="header header-bg">
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
                  <a class="hover" href="#">
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

    <div class="banner wow fadeIn animated" style="visibility: visible; animation-name: fadeIn;">
      <div
        class="swiper-container banners swiper-container-initialized swiper-container-horizontal"
      >
        <div
          class="swiper-wrapper"
          style="transition-duration: 300ms; transform: translate3d(0px, 0px, 0px);"
        >
          <div class="swiper-slide swiper-slide-active" style="width: 1323px; margin-right: 30px;">
            <a href="#" target="_blank">
              <div class="sg_s">
                <div class="sc-banner container">
                  <div
                    class="sg_s_l wow bounceInLeft animated"
                    style="visibility: visible; animation-name: bounceInLeft;"
                  >
                    <div
                      class="title-h2 wow fadeInUp animated"
                      style="visibility: visible; animation-name: fadeInUp;"
                    >APP艺术家</div>
                    <div class="sg-list">为您设计一套APP艺术品</div>
                    <div class="consult">马上咨询</div>
                  </div>
                  <div class="sg_s_r"></div>
                </div>
              </div>
            </a>
          </div>
          <div class="swiper-slide swiper-slide-next" style="width: 1323px; margin-right: 30px;">
            <a target="_blank">
              <div class="sg_s">
                <div class="sc-banner container">
                  <div
                    class="sg_s_l wow bounceInLeft animated"
                    style="visibility: visible; animation-name: bounceInLeft;"
                  >
                    <div
                      class="title-h2 wow fadeInUp animated"
                      style="visibility: visible; animation-name: fadeInUp;"
                    >APP艺术家</div>
                    <div class="sg-list">为您设计一套APP艺术品</div>
                    <div class="consult">马上咨询</div>
                  </div>
                  <div class="sg_s_r"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-clickable">
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
        </div>
        <!-- Add Arrows -->
        <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>-->
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>

      <div class="index-one beijing">
        <ul>
          <li>
            <a href="#">
              <p>商城APP开发</p>
              <span>点击查看案例&gt;&gt;</span>
            </a>
          </li>

          <li
            class="wow fadeInLeft animated animated animated animated"
            data-wow-delay="0.5s"
            style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;"
          >
            <a href="#">
              <p>医疗APP开发</p>
              <span>点击查看案例&gt;&gt;</span>
            </a>
          </li>

          <li
            class="wow fadeInLeft animated animated animated animated"
            data-wow-delay="1s"
            style="visibility: visible; animation-delay: 1s; animation-name: fadeInLeft;"
          >
            <a href="#">
              <p>金融APP开发</p>
              <span>点击查看案例&gt;&gt;</span>
            </a>
          </li>
          <li
            class="wow fadeInRight animated animated animated animated"
            data-wow-delay="1.5s"
            style="visibility: visible; animation-delay: 1.5s; animation-name: fadeInRight;"
          >
            <a href="#">
              <p>教育APP开发</p>
              <span>点击查看案例&gt;&gt;</span>
            </a>
          </li>
          <li
            class="wow fadeInRight animated animated animated animated"
            data-wow-delay="2s"
            style="visibility: visible; animation-delay: 2s; animation-name: fadeInRight;"
          >
            <a href="#">
              <p>各行APP开发</p>
              <span>点击查看案例&gt;&gt;</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index4">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >APP 一站式服务</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >APP One-stop Service</big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >网奇为您量身定制精美、高效的 APP 和 APP 运营指导</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            We customize the exquisite
            and efficient operation guidance of APP and APP for you
          </small>
        </div>
        <div class="container clearfix">
          <div class="col col-main">
            <div class="main-wrap">
              <div class="index-product-sale">
                <div class="module-wrap">
                  <div class="index-sale">
                    <div class="y-row" style="margin:0 auto">
                      <ul class="card-area">
                        <li
                          class="card-item wow fadeIn animated animated"
                          data-index="0"
                          style="visibility: visible; animation-name: fadeIn;"
                        >
                          <div class="card">
                            <div class="card-title title-even">
                              <div class="content">
                                <div class="ali-product-img">
                                  <img
                                    src="../../assets/wangqi_ysj/index4-110.png"
                                    alt
                                    class="un-hover"
                                  />
                                  <img
                                    src="../../assets/wangqi_ysj/index4110.png"
                                    alt
                                    class="with-hover"
                                  />
                                </div>
                                <div class="product-img-mb">
                                  <img src="../../assets/wangqi_ysj/index4110.png" alt />
                                  <h2>APP &nbsp;功能开发</h2>
                                  <div
                                    class="info"
                                  >高安全&nbsp; &nbsp;&nbsp;高易用 &nbsp;&nbsp; &nbsp; 高性能</div>
                                </div>
                              </div>
                            </div>
                            <div class="card-content content-first">
                              <div class="card-title-biao">
                                <h2>APP &nbsp;功能开发</h2>
                                <div class="info">高安全&nbsp; &nbsp;&nbsp;高易用 &nbsp;&nbsp; &nbsp; 高性能</div>
                              </div>
                              <ul class="content-first-list">
                                <li>运行速度快</li>
                                <li>用户体验优</li>
                                <li>系统功能强</li>
                                <li>运行速度快</li>
                              </ul>
                            </div>
                            <div class="card-content content-second">
                              <div class="card-title-biaos">
                                <h2>APP &nbsp;功能开发</h2>
                                <div class="info">高安全&nbsp; &nbsp;&nbsp;高易用 &nbsp;&nbsp; &nbsp; 高性能</div>
                                <div class="intro">
                                  <ul class>
                                    <li>商城购物</li>
                                    <li>在线支付</li>
                                    <li>视频直播</li>
                                    <li>教育培训</li>
                                    <li>金融P2P</li>
                                    <li>医疗美容</li>
                                    <li>直销系统</li>
                                    <li>区块链币</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="card-consultation">
                                <a href="#" target="_blank">立即咨询&gt;</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          class="card-item wow fadeIn animated animated active"
                          data-index="1"
                          style="visibility: visible; animation-name: fadeIn;"
                        >
                          <div class="card">
                            <div class="card-title title-odd">
                              <div class="content">
                                <div class="ali-product-img">
                                  <img
                                    src="../../assets/wangqi_ysj/index4-111.png"
                                    alt
                                    class="un-hover"
                                  />
                                  <img
                                    src="../../assets/wangqi_ysj/index4111.png"
                                    alt
                                    class="with-hover"
                                  />
                                </div>
                                <div class="product-img-mb">
                                  <img src="../../assets/wangqi_ysj/index4111.png" alt />
                                  <h2>APP &nbsp;美工设计</h2>
                                  <div
                                    class="info"
                                  >我们是&nbsp; &nbsp;&nbsp;APP &nbsp;&nbsp; &nbsp; 艺术家</div>
                                </div>
                              </div>
                            </div>
                            <div class="card-content content-first">
                              <div class="card-title-biao">
                                <h2>APP &nbsp;美工设计</h2>
                                <div class="info">我们是&nbsp; &nbsp;&nbsp;APP &nbsp;&nbsp; &nbsp; 艺术家</div>
                              </div>
                              <ul class="content-first-list">
                                <li>界面美观大方</li>
                                <li>色彩搭配科学</li>
                                <li>每页是艺术品</li>
                                <li>百分百满意</li>
                              </ul>
                            </div>
                            <div class="card-content content-second">
                              <div class="card-title-biaos">
                                <h2>APP &nbsp;美工设计</h2>
                                <div class="info">我们是&nbsp; &nbsp;&nbsp;APP &nbsp;&nbsp; &nbsp; 艺术家</div>
                                <div class="intro">我们的目标是：为您呈现一款精美绝伦的APP艺术品，有科学的VI配色体系，每一页每一个细节精心雕琢。</div>
                              </div>
                              <div class="card-consultation">
                                <a href="#" target="_blank">立即咨询&gt;</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li
                          class="card-item wow fadeIn animated animated"
                          data-index="2"
                          style="visibility: visible; animation-name: fadeIn;"
                        >
                          <div class="card">
                            <div class="card-title title-even">
                              <div class="content">
                                <div class="ali-product-img">
                                  <img
                                    src="../../assets/wangqi_ysj/index4-112.png"
                                    alt
                                    class="un-hover"
                                  />
                                  <img
                                    src="../../assets/wangqi_ysj/index4112.png"
                                    alt
                                    class="with-hover"
                                  />
                                </div>
                                <div class="product-img-mb">
                                  <img src="../../assets/wangqi_ysj/index4112.png" alt />
                                  <h2>APP &nbsp;运营指导</h2>
                                  <div class="info" style="letter-spacing: 7px">我们关心您是否盈利</div>
                                </div>
                              </div>
                            </div>
                            <div class="card-content content-first">
                              <div class="card-title-biao">
                                <h2>APP &nbsp;运营指导</h2>
                                <div class="info" style="letter-spacing: 7px">我们关心您是否盈利</div>
                              </div>

                              <ul class="content-first-list">
                                <!-- <li>直销制度设计</li>
                                                        <li>直销制度推广话术</li>
                                                        <li>制度讲解H5动画</li>
                                                        <li>语音制度讲解</li>
                                <li>视频制度演示</li>-->
                                <li>
                                  <h2>在线指导：</h2>
                                  <p>赠送APP运营学院VIP账户</p>
                                </li>
                                <li>
                                  <h2>人工指导：</h2>
                                  <p>APP运营专家长期运营指导</p>
                                </li>
                              </ul>
                            </div>
                            <div class="card-content content-second">
                              <div class="card-title-biaos">
                                <h2>APP &nbsp;运营指导</h2>
                                <div class="info">我们关心您是否盈利</div>
                                <div class="intro">
                                  在网奇完成APP开发之后，我们
                                  希望您的项目能长期盈利，为此
                                  我们也原意多做一些帮助！
                                </div>
                              </div>
                              <div class="card-consultation">
                                <a href="#" target="_blank">立即咨询&gt;</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!--module -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="Why-Choice">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >为什么选择我们</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >Why did you choose us</big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >我们为您们的选择负责，我们为我们的口碑负责</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            We are responsible for your
            choice, we are responsible for our word of mouth.
          </small>
        </div>
        <div class="mcon">
          <div class="mcon-artil">
            <ul class="wow fadeIn animated" style="visibility: visible; animation-name: fadeIn;">
              <li
                class="wow fadeInRight animated animated animated animated"
                data-wow-delay="0.5s"
                style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;"
              >
                <img src="../../assets/wangqi_ysj/Choice-tu1.png" alt />
                <img src="../../assets/wangqi_ysj/Choice-tu1-hover.png" alt class="dis" />
                <div class="li-lisdt">
                  <h3>开发费用少</h3>
                  <p>
                    开发费用低于北、上、广一线城市30%
                    而且质量至少高于北、上、广50%
                  </p>
                </div>
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                data-wow-delay="1s"
                style="visibility: visible; animation-delay: 1s; animation-name: fadeInLeft;"
              >
                <img src="../../assets/wangqi_ysj/Choice-tu2.png" alt />
                <img src="../../assets/wangqi_ysj/Choice-tu2-hover.png" alt class="dis" />
                <div class="li-lisdt">
                  <h3>开发速度快</h3>
                  <p>全国最先采用 Flutter 技术开发 APP 开发速度快，运行速度快</p>
                </div>
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                data-wow-delay="1.5"
                style="visibility: visible; animation-delay: 1.5s; animation-name: fadeInRight;"
              >
                <img src="../../assets/wangqi_ysj/Choice-tu3.png" alt />
                <img src="../../assets/wangqi_ysj/Choice-tu3-hover.png" alt class="dis" />
                <div class="li-lisdt">
                  <h3>开发团队优</h3>
                  <p>网奇公司的每位开发团队工程师 至少5年以上经验，拒绝毕业生</p>
                </div>
              </li>
              <li
                class="wow fadeInRight animated animated animated animated"
                data-wow-delay="2"
                style="visibility: visible; animation-delay: 2s; animation-name: fadeInRight;"
              >
                <img src="../../assets/wangqi_ysj/Choice-tu4.png" alt />
                <img src="../../assets/wangqi_ysj/Choice-tu4-hover.png" alt class="dis" />
                <div class="li-lisdt">
                  <h3>服务体系统</h3>
                  <p>全国独家“五赞”诚信技术服务体系 用优质的服务为我们立口碑</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="advertisement-list1 advertisement">
      <div class="pic">
        <img
          style="width: 100%;height: auto;"
          src="../../assets/wangqi_ysj/advertisement-bg.jpg"
          alt
        />
        <div class="beijing adv-artals">
          <div
            class="adv-artal wow fadeInRight animated animated animated animated"
            style="visibility: visible; animation-name: fadeInRight;"
          >
            <h2>
              我们致力于为您
              <br />打造一件：APP艺术品
            </h2>
            <p>互联网+城市生活四网合一平台开发手机APP和网站建设</p>
          </div>
        </div>
      </div>
    </div>
    <div class="Rotary-sowing">
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

        <div class="mcon hidden-xs">
          <div class="dnSlide">
            <div class="dnSlide-main dn-response done" style="height: 650px;">
              <ul class="dnSlide-list">
                <li
                  class="dnSlide-item active"
                  style="width: 727.65px; height: 650px; left: 297.5px; z-index: 2;"
                >
                  <div class="slideC">
                    <img class="slide-img" src="../../assets/wangqi_ysj/Rotary-sowing-logo1.png" />
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
                  style="width: 290.8px; height: 260px; z-index: 1; opacity: 0.5; left: 883.2px; top: 195px;"
                >
                  <div class="slideC">
                    <img class="slide-img" src="../../assets/wangqi_ysj/Rotary-sowing-logo2.png" />
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
                  style="width: 116.32px; height: 104px; z-index: 0; opacity: 0; left: 1206.68px; top: 273px;"
                >
                  <div class="slideC">
                    <img class="slide-img" src="../../assets/wangqi_ysj/Rotary-sowing-logo3.png" />
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
                  style="width: 116px; height: 104px; z-index: 0; opacity: 0; left: 0px; top: 273px;"
                >
                  <div class="slideC">
                    <img class="slide-img" src="../../assets/wangqi_ysj/Rotary-sowing-logo4.png" />
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
                  style="width: 290px; height: 260px; z-index: 1; opacity: 0.5; left: 149px; top: 195px;"
                >
                  <div class="slideC">
                    <img class="slide-img" src="../../assets/wangqi_ysj/Rotary-sowing-logo5.png" />
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
              <div class="dnSlide-btn dnSlide-left-btn" style="width: 297.5px; height: 100%;"></div>
              <div class="dnSlide-btn dnSlide-right-btn" style="width: 297.5px; height: 100%;"></div>
            </div>
          </div>
        </div>

        <div
          class="swiper-container rotary visible-xs-block swiper-container-cube swiper-container-3d swiper-container-initialized swiper-container-horizontal"
          style="cursor: grab;"
        >
          <div
            class="swiper-wrapper"
            style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg); transform-origin: 50% 50% -315px;"
          >
            <div
              class="swiper-slide swiper-slide-active"
              style="width: 630px; transition-duration: 0ms; transform: rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px);"
            >
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-logo1.png" />
                    <h3>美工赞</h3>
                    <span>PRAISE TO THE WORKERS</span>
                    <p>
                      我们开发设计的每一款APP，都是一件艺术品，这个是我们公司服务的最高宗旨。
                      在美工设计上达到您100%满意为止，每一页或每一个细节，我们都要精雕细琢，您不用说，我们自己都会去做。
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide-shadow-left" style="opacity: 0; transition-duration: 0ms;"></div>
              <div class="swiper-slide-shadow-right" style="opacity: 0; transition-duration: 0ms;"></div>
            </div>
            <div
              class="swiper-slide swiper-slide-next"
              style="width: 630px; transition-duration: 0ms; transform: rotateX(0deg) rotateY(90deg) translate3d(0px, 0px, 0px);"
            >
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-logo2.png" />
                    <h3>速度赞</h3>
                    <span>SPEED PRAISE</span>
                    <p>
                      每一次页面切换，每一次点击操作；不管是10个人同时使用，还是几十万人同时使用，都对APP使用的操作速度上都有极致要求；
                      我们花费很多精力，对每次操作的速度研发，都比其他同行公司要做的多。
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide-shadow-left" style="opacity: 1; transition-duration: 0ms;"></div>
              <div class="swiper-slide-shadow-right" style="opacity: 0; transition-duration: 0ms;"></div>
            </div>
            <div
              class="swiper-slide"
              style="width: 630px; transition-duration: 0ms; transform: rotateX(0deg) rotateY(180deg) translate3d(630px, 0px, 630px);"
            >
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-logo3.png" />
                    <h3>体验赞</h3>
                    <span>EXPERIENCE PRAISE</span>
                    <p>
                      一套复杂的操作流程，能否用最少的几步完成，让用户使用简单；每一次操作体验都是用户所想，
                      用户在使用APP的整个过程中，是否愉悦，是否够傻瓜。这才是一个好的APP，用户体验好，才真的好。
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide-shadow-left" style="opacity: 1; transition-duration: 0ms;"></div>
              <div class="swiper-slide-shadow-right" style="opacity: 0; transition-duration: 0ms;"></div>
            </div>
            <div
              class="swiper-slide"
              style="width: 630px; transition-duration: 0ms; transform: rotateX(0deg) rotateY(270deg) translate3d(-630px, 0px, 1890px);"
            >
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-logo4.png" />
                    <h3>运营赞</h3>
                    <span>OPERATIONAL PRAISE</span>
                    <p>
                      很多开发APP的客户，大部分都是APP运营新手，很多基本知识需要学习，或者更需要一些推广运营方面的专业指导。
                      为此网奇花费很多心思，准备了线上APP运营学院和专业的运营专家为您人工指导。
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide-shadow-left" style="opacity: 1; transition-duration: 0ms;"></div>
              <div class="swiper-slide-shadow-right" style="opacity: 0; transition-duration: 0ms;"></div>
            </div>
            <div
              class="swiper-slide"
              style="width: 630px; transition-duration: 0ms; transform: rotateX(0deg) rotateY(360deg) translate3d(-2520px, 0px, 0px);"
            >
              <div class="poster-item">
                <div class="poster-all">
                  <div class="pro-wp">
                    <img src="../../assets/wangqi_ysj/Rotary-sowing-logo5.png" />
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
              <div class="swiper-slide-shadow-left" style="opacity: 1; transition-duration: 0ms;"></div>
              <div class="swiper-slide-shadow-right" style="opacity: 0; transition-duration: 0ms;"></div>
            </div>
            <div
              class="swiper-cube-shadow"
              style="height: 630px; transform: translate3d(0px, 335px, -315px) rotateX(90deg) rotateZ(0deg) scale(0.94);"
            ></div>
          </div>

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
    <div class="advertisement-list2 advertisement">
      <div class="pic">
        <img
          style="width: 100%;height: auto;"
          src="../../assets/wangqi_ysj/advertisement2-bg.jpg"
          alt
        />
        <div class="beijing adv-artals">
          <div
            class="adv-artal wow fadeInRight animated animated animated animated"
            style="visibility: visible; animation-name: fadeInRight;"
          >
            <h2>真心换诚信，优质服务请放心</h2>
            <p>我们为你提供真挚的服务，让您感受到我们的专业与热情</p>
          </div>
        </div>
      </div>
    </div>

    <div class="Case-Appreciation">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >客户案例欣赏</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >
            Customer Case
            Appreciation
          </big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >每一款客户案例，都是我们精心雕琢的艺术品</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            Every customer case is a
            carefully crafted work of art.
          </small>
        </div>
        <div class="mcon">
          <ul>
            <li
              class="wow fadeInLeft animated animated animated animated"
              style="visibility: visible; animation-name: fadeInLeft;"
            >
              <img src="../../assets/wangqi_ysj/dianshang1.png" />
            </li>
            <li
              class="wow fadeInLeft animated animated animated animated"
              style="visibility: visible; animation-name: fadeInLeft;"
            >
              <img src="../../assets/wangqi_ysj/dianshang3.png" />
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              style="visibility: visible; animation-name: fadeInRight;"
            >
              <img src="../../assets/wangqi_ysj/jiaoyu1.png" />
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              style="visibility: visible; animation-name: fadeInRight;"
            >
              <img src="../../assets/wangqi_ysj/jiankang3.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="development-team">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >APP 开发团队</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >App development team</big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >每一名工程师至少5年以上工作经验，他们都奉行五赞服务体系</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            very engineer has at least 5
            years'working experience, and they all pursue the five praises service system
          </small>
        </div>
        <div class="mcon">
          <div
            class="swiper-container team hidden-xs swiper-container-initialized swiper-container-horizontal swiper-container-multirow"
          >
            <div
              class="swiper-wrapper"
              style="width: 1958px; transform: translate3d(0px, 0px, 0px);"
            >
              <div
                class="swiper-slide swiper-slide-active"
                data-swiper-column="0"
                data-swiper-row="0"
                style="order: 0; width: 622.5px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular1.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>直销行业十年从业经验，担任多家公司操盘顾问。大数据操盘+线下公关操盘，帮助多家直销企业快速搭建直销平台。</h4>
                    <span>-Alex 总经理</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-next"
                data-swiper-column="0"
                data-swiper-row="1"
                style="-webkit-box-ordinal-group: 3; order: 3; margin-top: 30px; width: 622.5px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular2.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>网奇公司技术总监，管理直销数字结算产品线工程研发团队，经手大量直销系统项目，深入研究高并发/高性能/高可用/大数据 的架构和解决方案</h4>
                    <span>-Aries 技术总监</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-column="1"
                data-swiper-row="0"
                style="-webkit-box-ordinal-group: 1; order: 1; width: 622.5px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular3.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>网奇公司架构师、高级技术顾问，原阿里巴巴虾米音乐北京分公司产品部技术经理。拥有8年的大型系统开发经验</h4>
                    <span>-Leo 首席架构师</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-column="1"
                data-swiper-row="1"
                style="-webkit-box-ordinal-group: 4; order: 4; margin-top: 30px; width: 622.5px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular4.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>产品总监，资深全栈工程师。十余年web从业经历。对系统架构、模块开发、网站运维都有丰富的经验。长期负责公司产品、研发及运营工作</h4>
                    <span>-Zeratul 产品总监</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-column="2"
                data-swiper-row="0"
                style="-webkit-box-ordinal-group: 2; order: 2; width: 622.5px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular5.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>项目经理，十余年直销系统项目行业经验，早期负责程序开发，现在主要负责用户需求分析，制定项目开发计划与可行性方案</h4>
                    <span>-Tony 项目经理</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-column="2"
                data-swiper-row="1"
                style="-webkit-box-ordinal-group: 5; order: 5; margin-top: 30px; width: 622.5px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular6.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>直销转型顾问，参与讨论策划多家直销公司社交电商转型计划，培训服务过一线直销公司30余家</h4>
                    <span>-周原 直销实战专家</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination swiper-pagination-bullets swiper-pagination-clickable">
              <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
              <span class="swiper-pagination-bullet"></span>
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
          <div
            class="swiper-container teams visible-xs-block swiper-container-initialized swiper-container-horizontal"
          >
            <div
              class="swiper-wrapper"
              style="transition-duration: 0ms; transform: translate3d(-660px, 0px, 0px);"
            >
              <div
                class="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                data-swiper-slide-index="5"
                style="width: 630px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular6.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>直销转型顾问，参与讨论策划多家直销公司社交电商转型计划，培训服务过一线直销公司30余家</h4>
                    <span>-周原 直销实战专家</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-active"
                data-swiper-slide-index="0"
                style="width: 630px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular1.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>直销行业十年从业经验，担任多家公司操盘顾问。大数据操盘+线下公关操盘，帮助多家直销企业快速搭建直销平台。</h4>
                    <span>-Alex 总经理</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-next"
                data-swiper-slide-index="1"
                style="width: 630px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular2.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>网奇公司技术总监，管理直销数字结算产品线工程研发团队，经手大量直销系统项目，深入研究高并发/高性能/高可用/大数据 的架构和解决方案</h4>
                    <span>-Aries 技术总监</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-slide-index="2"
                style="width: 630px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular3.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>网奇公司架构师、高级技术顾问，原阿里巴巴虾米音乐北京分公司产品部技术经理。拥有8年的大型系统开发经验</h4>
                    <span>-Leo 首席架构师</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-slide-index="3"
                style="width: 630px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular4.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>产品总监，资深全栈工程师。十余年web从业经历。对系统架构、模块开发、网站运维都有丰富的经验。长期负责公司产品、研发及运营工作</h4>
                    <span>-Zeratul 产品总监</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-swiper-slide-index="4"
                style="width: 630px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular5.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>项目经理，十余年直销系统项目行业经验，早期负责程序开发，现在主要负责用户需求分析，制定项目开发计划与可行性方案</h4>
                    <span>-Tony 项目经理</span>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide swiper-slide-duplicate-prev"
                data-swiper-slide-index="5"
                style="width: 630px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular6.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>直销转型顾问，参与讨论策划多家直销公司社交电商转型计划，培训服务过一线直销公司30余家</h4>
                    <span>-周原 直销实战专家</span>
                  </div>
                </div>
              </div>

              <div
                class="swiper-slide swiper-slide-duplicate"
                data-swiper-slide-index="0"
                style="width: 630px; margin-right: 30px;"
              >
                <div class="team-list">
                  <div class="team-words">
                    <div class="team-circular">
                      <img src="../../assets/wangqi_ysj/team-circular1.png" alt />
                    </div>
                    <img src="../../assets/wangqi_ysj/team-list-bioa.png" />
                    <h4>直销行业十年从业经验，担任多家公司操盘顾问。大数据操盘+线下公关操盘，帮助多家直销企业快速搭建直销平台。</h4>
                    <span>-Alex 总经理</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"></div>
            <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="advertisement-list3 advertisement">
      <div class="pic">
        <img
          style="width: 100%;height: auto;"
          src="../../assets/wangqi_ysj/advertisement3-bg.jpg"
          alt
        />
        <div class="beijing adv-artals">
          <div
            class="adv-artal wow fadeInRight animated animated animated animated"
            style="visibility: visible; animation-name: fadeInRight;"
          >
            <h2>
              优秀的APP
              <br />令品牌长远发展更具竞争力
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="Operation-Promotion">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >APP 运营推广方案</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >
            APP Operational Promotion
            Scheme
          </big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >我们关心您的 APP 是否盈利，为此愿多做一些</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            We are concerned about
            whether your APP is profitable, so we would like to do more
          </small>
        </div>
        <div class="promotion-list">
          <ul>
            <li
              class="wow slideInLeft animated animated"
              style="visibility: visible; animation-name: slideInLeft;"
            >
              <div class="study-list">
                <div class="prootion-title">
                  <span>01</span>
                  <h4>运营解决方案</h4>
                </div>
                <div class="info">运营解决方案运营解决方案运营解决方案运营解决方案...</div>
              </div>
            </li>
            <li
              class="wow slideInRight animated animated"
              style="visibility: visible; animation-name: slideInRight;"
            >
              <div class="study-list">
                <div class="prootion-title">
                  <span>02</span>
                  <h4>运营解决方案</h4>
                </div>
                <div class="info">运营解决方案运营解决方案运营解决方案运营解决方案...</div>
              </div>
            </li>
            <li
              class="wow slideInLeft animated animated animated"
              style="visibility: visible; animation-name: slideInLeft;"
            >
              <div class="study-list">
                <div class="prootion-title">
                  <span>03</span>
                  <h4>运营解决方案</h4>
                </div>
                <div class="info">运营解决方案运营解决方案运营解决方案运营解决方案...</div>
              </div>
            </li>
            <li
              class="wow slideInRight animated animated"
              style="visibility: visible; animation-name: slideInLeft;"
            >
              <div class="study-list">
                <div class="prootion-title">
                  <span>04</span>
                  <h4>运营解决方案</h4>
                </div>
                <div class="info">运营解决方案运营解决方案运营解决方案运营解决方案...</div>
              </div>
            </li>
          </ul>

          <div class="index-study-middle">
            <div
              class="wow fadeInUp animated animated"
              style="visibility: visible; animation-name: slideInLeft;"
            >
              <div class="study-midd">
                <div class="pic">
                  <img src="../../assets/wangqi_ysj/Operation-Promotion-logo.jpg" alt />
                </div>
              </div>
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
          <a href="#" class="m_f1">
            <img src="../../assets/wangqi_ysj/mobile_foot_i2.png" /> 在线客服
          </a>
        </div>

        <div class="mobile_foot3">
          <a id="gotop">
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
              <a href="#">关于网奇</a>
            </h3>
            <p>
              <a href="#">公司介绍</a>
              <a href="#">公司愿景</a>
              <a href="#">服务标准</a>
              <a href="#">联系我们</a>
            </p>
          </dd>
          <dd
            class="f_p2 wow flipInX animated animated animated"
            data-wow-delay="250ms"
            style="visibility: visible; animation-delay: 250ms; animation-name: flipInX; height: 150px;"
          >
            <h3>
              <a href="#">热点问题</a>
            </h3>
            <p>
              <a href="#">苹果账户</a>
              <a href="#">安卓收费</a>
              <a href="#">越狱安装</a>
              <a href="#">开发时间</a>
            </p>
          </dd>
          <dd
            class="f_p3 wow flipInX animated animated animated"
            data-wow-delay="450ms"
            style="visibility: visible; animation-delay: 450ms; animation-name: flipInX; height: 150px;"
          >
            <h3>
              <a href="#">运营指导</a>
            </h3>
            <p>
              <a href="#">如何推广</a>
              <a href="#">如何裂变</a>
              <a href="#">如何锁客</a>
              <a href="#">如何复消</a>
            </p>
          </dd>
          <dd
            class="f_p4 wow flipInX animated animated animated"
            data-wow-delay="650ms"
            style="visibility: visible; animation-delay: 650ms; animation-name: flipInX; height: 150px;"
          >
            <h3>
              <a href="#">服务行业</a>
            </h3>
            <p>
              <a href="#">商城购物</a>
              <a href="#">医疗美业</a>
              <a href="#">教育培训</a>
              <a href="#">金融区块</a>
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
                <a title="qq咨询：97653328">97653328</a>
                <a title="qq咨询：97653324">97653324</a>
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
      .$(".menu .n_index")
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
  }
};
</script>

<style scoped>
@media only screen and (min-width: 48em) {
  .head_fx {
    display: none;
  }
}

.noswap {
  position: fixed;
}
</style>