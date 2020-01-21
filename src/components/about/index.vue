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
                <a @click="$router.push('/about')" class="hover">
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
                  <a href="./case.html">
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
                </li>i&gt;
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
          >关于我们</em>
          <p
            class="wow zoomInDown animated animated"
            data-wow-delay=".4s"
            style="visibility: visible; animation-delay: 0.4s; animation-name: zoomInDown;"
          >ABOUT US</p>
        </div>
        <div class="about-list">
          <ul>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="0.5s"
              style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;"
            >
              <a href="./about.html#">
                <div class="inyro">
                  <h3>公司简介</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="1s"
              style="visibility: visible; animation-delay: 1s; animation-name: fadeInLeft;"
            >
              <a href="./about.html#">
                <div class="inyro">
                  <h3>发展历程</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="1.5"
              style="visibility: visible; animation-delay: 1.5s; animation-name: fadeInRight;"
            >
              <a href="./about.html#">
                <div class="inyro">
                  <h3>荣誉资质</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="2"
              style="visibility: visible; animation-delay: 2s; animation-name: fadeInRight;"
            >
              <a href="./about.html#">
                <div class="inyro">
                  <h3>总经理</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="2.5"
              style="visibility: visible; animation-delay: 2.5s; animation-name: fadeInRight;"
            >
              <a href="./about.html#">
                <div class="inyro">
                  <h3>服务理念</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="3"
              style="visibility: visible; animation-delay: 3s; animation-name: fadeInRight;"
            >
              <a href="./about.html#">
                <div class="inyro">
                  <h3>直销动态</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="two-bg">
      <div class="Artist">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated"
              style="visibility: hidden; animation-name: none;"
            >网奇 APP艺术家</strong>
            <big
              class="wow fadeInDown animated animated"
              data-wow-delay="500ms"
              style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
            >Netqi Artists</big>
            <p
              class="wow fadeInDown animated animated"
              data-wow-delay="600ms"
              style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
            >志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中</p>
            <small
              class="wow fadeInDown animated animated"
              data-wow-delay="700ms"
              style="visibility: hidden; animation-delay: 700ms; animation-name: none;"
            >
              A climber who aspires to the
              summit will not be intoxicated with some footprint along the way
            </small>
          </div>
          <div class="mcon">
            <div class="art-left">
              <h2></h2>
              <p>
                秦皇岛网奇网络科技有限公司是国内最早专注直销软件开发的公司，始建于2006年。经过十年的发展，网奇已经为国内十多家有牌照直销企业服务，同时为百家正在创业的直销品牌开发直销系统。并因其周到的服务、专业的技术和完善的售后服务得到了业界的一致好评。
                秦皇岛网奇网络科技有限公司是国内最早专注直销软件开发的公司
              </p>
            </div>
            <div class="art-right">
              <div id="pic">
                <img src="../../assets/wangqi_ysj/shipin_bg.jpg" alt />
              </div>
            </div>
          </div>
          <div class="artist-ul">
            <ul>
              <li>
                <div class="artist-all">
                  <img src="../../assets/wangqi_ysj/Artist-list1.png" alt />
                  <h3>开发费用少</h3>
                </div>
              </li>
              <li>
                <div class="artist-all">
                  <img src="../../assets/wangqi_ysj/Artist-list2.png" alt />
                  <h3>开发速度快</h3>
                </div>
              </li>
              <li>
                <div class="artist-all">
                  <img src="../../assets/wangqi_ysj/Artist-list3.png" alt />
                  <h3>开发团队优</h3>
                </div>
              </li>
              <li>
                <div class="artist-all">
                  <img src="../../assets/wangqi_ysj/Artist-list4.png" alt />
                  <h3>服务体系统</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="develop-history">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated"
              style="visibility: hidden; animation-name: none;"
            >发展历程</strong>
            <big
              class="wow fadeInDown animated animated"
              data-wow-delay="500ms"
              style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
            >Development History</big>
            <p
              class="wow fadeInDown animated animated"
              data-wow-delay="600ms"
              style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
            >志在峰巅的攀登者，不会陶醉在沿途的某个脚印之中</p>
            <small
              class="wow fadeInDown animated animated"
              data-wow-delay="700ms"
              style="visibility: hidden; animation-delay: 700ms; animation-name: none;"
            >
              A climber who aspires to the
              summit will not be intoxicated with some footprint along the way
            </small>
          </div>
          <div class="mcon">
            <ul>
              <li
                class="wow fadeInRight animated animated animated"
                data-wow-delay="0.5s"
                style="visibility: hidden; animation-delay: 0.5s; animation-name: none;"
              >
                <div class="yuan">
                  <span></span>
                </div>
                <div class="artil">
                  <p>2006年网奇在美丽的海边城市 秦皇岛正式成立正式开启直销 系统开发！</p>
                  <h2>2006年</h2>
                </div>
              </li>
              <li
                class="wow fadeInRight animated animated animated"
                data-wow-delay="1s"
                style="visibility: hidden; animation-delay: 1s; animation-name: none;"
              >
                <div class="artil">
                  <h2>2008年</h2>
                  <p>国内首家研发成功分布式集群大数据解决方案，可承载千万级别数据量。</p>
                </div>
                <div class="yuan">
                  <span></span>
                </div>
              </li>
              <li
                class="wow fadeInRight animated animated animated"
                data-wow-delay="1.5s"
                style="visibility: hidden; animation-delay: 1.5s; animation-name: none;"
              >
                <div class="yuan">
                  <span></span>
                </div>
                <div class="artil">
                  <p>累计服务有牌照客户十家，正在申请和准备申请牌照客户二百多家。</p>
                  <h2>2012年</h2>
                </div>
              </li>
              <li
                class="wow fadeInRight animated animated animated"
                data-wow-delay="2s"
                style="visibility: hidden; animation-delay: 2s; animation-name: none;"
              >
                <div class="artil">
                  <h2>2018年</h2>
                  <p>网奇公司十年磨一剑，跨域直销行业巅峰级别平台产品“赞商”即将上线。</p>
                </div>
                <div class="yuan">
                  <span></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="honor-zz">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated"
            style="visibility: hidden; animation-name: none;"
          >荣誉资质</strong>
          <big
            class="wow fadeInDown animated animated"
            data-wow-delay="500ms"
            style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
          >
            Honorary
            Qualification
          </big>
          <p
            class="wow fadeInDown animated animated"
            data-wow-delay="600ms"
            style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
          >不问收获 只问耕耘</p>
          <small
            class="wow fadeInDown animated animated"
            data-wow-delay="700ms"
            style="visibility: hidden; animation-delay: 700ms; animation-name: none;"
          >
            Ask not harvest but
            ploughing
          </small>
        </div>
        <div class="nTab">
          <div class="TabTitle">
            <ul id="myTab4">
              <li class="active" onclick="nTabs(this,0);">
                <div class="pro-img">
                  <h3>2015年</h3>
                </div>
              </li>
              <li class="normal" onclick="nTabs(this,1);">
                <div class="pro-img">
                  <h3>2016年</h3>
                </div>
              </li>
              <li class="normal" onclick="nTabs(this,2);">
                <div class="pro-img">
                  <h3>2017年</h3>
                </div>
              </li>
              <li class="normal" onclick="nTabs(this,3);">
                <div class="pro-img">
                  <h3>2018年</h3>
                </div>
              </li>
            </ul>
          </div>
          <div class="TabContent">
            <div id="myTab4_Content0">
              <div class="index_pc">
                <div class="img-left">
                  <img src="../../assets/wangqi_ysj/honor-zz-tu.jpg" alt />
                </div>
                <div class="slide-intro">
                  <h2>2015年</h2>
                  <p>2015年网奇网络科技有限公司在亚太地区直销行业中获得最佳服务商奖2015年网奇网络科技有限公司在亚太地区直销行业中获得最佳服务商奖</p>
                  <span>
                    <a @click="$router.push('/about')">查看更多 &gt;</a>
                  </span>
                </div>
              </div>
            </div>
            <div id="myTab4_Content1" class="none">
              <div class="index_pc">
                <div class="img-left">
                  <img src="../../assets/wangqi_ysj/honor-zz-tu.jpg" alt />
                </div>
                <div class="slide-intro">
                  <h2>2016年</h2>
                  <p>2015年网奇网络科技有限公司在亚太地区直销行业中获得最佳服务商奖2015年网奇网络科技有限公司在亚太地区直销行业中获得最佳服务商奖</p>
                  <span>
                    <a @click="$router.push('/about')">查看更多 &gt;</a>
                  </span>
                </div>
              </div>
            </div>
            <div id="myTab4_Content2" class="none">
              <div class="index_pc">
                <div class="img-left">
                  <img src="../../assets/wangqi_ysj/honor-zz-tu.jpg" alt />
                </div>
                <div class="slide-intro">
                  <h2>2017年</h2>
                  <p>2015年网奇网络科技有限公司在亚太地区直销行业中获得最佳服务商奖2015年网奇网络科技有限公司在亚太地区直销行业中获得最佳服务商奖</p>
                  <span>
                    <a @click="$router.push('/about')">查看更多 &gt;</a>
                  </span>
                </div>
              </div>
            </div>
            <div id="myTab4_Content3" class="none">
              <div class="index_pc">
                <div class="img-left">
                  <img src="../../assets/wangqi_ysj/honor-zz-tu.jpg" alt />
                </div>
                <div class="slide-intro">
                  <h2>2018年</h2>
                  <p>2015年网奇网络科技有限公司在亚太地区直销行业中获得最佳服务商奖2015年网奇网络科技有限公司在亚太地区直销行业中获得最佳服务商奖</p>
                  <span>
                    <a @click="$router.push('/about')">查看更多 &gt;</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="General-manager">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated"
            style="visibility: hidden; animation-name: none;"
          >总经理</strong>
          <big
            class="wow fadeInDown animated animated"
            data-wow-delay="500ms"
            style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
          >
            Customer Case
            Appreciation
          </big>
          <p
            class="wow fadeInDown animated animated"
            data-wow-delay="600ms"
            style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
          >每一款客户案例，都是我们精心雕琢的艺术品</p>
          <small
            class="wow fadeInDown animated animated"
            data-wow-delay="700ms"
            style="visibility: hidden; animation-delay: 700ms; animation-name: none;"
          >
            Every customer case is a carefully
            crafted work of art.
          </small>
        </div>
        <ul class="manager-list">
          <li class="wow fadeInLeft animated" style="visibility: hidden; animation-name: none;">
            <div class="manager-img">
              <img src="../../assets/wangqi_ysj/manager-tu.png" alt />
            </div>
          </li>
          <li
            class="inform wow fadeInRight animated"
            style="visibility: hidden; animation-name: none;"
          >
            <h2>
              Alex
              <span>(王旗)</span>
            </h2>
            <p>直销行业十年从业经验，担任多家公司技术操盘顾问大数据+线下公关操盘，帮助多家直销企业快速搭建直销平台，风险规避</p>
          </li>
        </ul>
        <section class="area_index about_partner" data-title="总经理">
          <div class="beijing1">
            <ul class="partner-bottom">
              <li class="wow fadeInLeft animated" style="visibility: hidden; animation-name: none;">
                <div class="partner-list">
                  <div class="pic">
                    <img src="../../assets/wangqi_ysj/General-tu1.jpg" alt />
                  </div>
                  <div class="intro">
                    <h4>王旗与三生施光辉</h4>
                  </div>
                </div>
              </li>
              <li class="wow fadeInDown animated" style="visibility: hidden; animation-name: none;">
                <div class="partner-list">
                  <div class="pic">
                    <img src="../../assets/wangqi_ysj/General-tu2.jpg" alt />
                  </div>
                  <div class="intro">
                    <h4>王旗与隆力奇徐之伟</h4>
                  </div>
                </div>
              </li>
              <li
                class="wow fadeInRight animated"
                style="visibility: hidden; animation-name: none;"
              >
                <div class="partner-list">
                  <div class="pic">
                    <img src="../../assets/wangqi_ysj/General-tu3.jpg" alt />
                  </div>
                  <div class="intro">
                    <h4>王旗与天士力木木</h4>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="partner-top">
              <li class="wow fadeInLeft animated" style="visibility: hidden; animation-name: none;">
                <div class="partner-list">
                  <img src="../../assets/wangqi_ysj/General-tu4.jpg" alt />
                  <div class="intro">
                    <h4>师从德家黄宏</h4>
                    <p>学习直销与互联网的有效结合，直销模式的创新研发。</p>
                  </div>
                </div>
              </li>
              <li class="wow fadeInDown animated" style="visibility: hidden; animation-name: none;">
                <div class="partner-list">
                  <img src="../../assets/wangqi_ysj/General-tu5.jpg" alt />
                  <div class="intro">
                    <h4>师从康婷邢文远</h4>
                    <p>邢文远（康婷阳光旗舰创始人），学习直销行业体系建设。</p>
                  </div>
                </div>
              </li>
              <li
                class="wow fadeInRight animated"
                style="visibility: hidden; animation-name: none;"
              >
                <div class="partner-list">
                  <img src="../../assets/wangqi_ysj/General-tu6.jpg" alt />
                  <div class="intro">
                    <h4>师从直销教父胡元江</h4>
                    <p>王旗拜师胡元江（中国直销教父），学习直销行业顶层设计。</p>
                  </div>
                </div>
              </li>
              <li
                class="wow fadeInRight animated"
                style="visibility: hidden; animation-name: none;"
              >
                <div class="partner-list">
                  <img src="../../assets/wangqi_ysj/General-tu7.jpg" alt />

                  <div class="intro">
                    <h4>师从安利王君平</h4>
                    <p>学习直销行业风险规避与公司组织架构的科学建设。</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div class="Rotary-sowing Rotary-sowing-about">
      <div class>
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated"
            style="visibility: hidden; animation-name: none;"
          >五赞服务体系</strong>
          <big
            class="wow fadeInDown animated animated"
            data-wow-delay="500ms"
            style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
          >Five Zan Service System</big>
          <p
            class="wow fadeInDown animated animated"
            data-wow-delay="600ms"
            style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
          >全国独家五赞服务体系，只为给您最顶端的服务体验</p>
          <small
            class="wow fadeInDown animated animated"
            data-wow-delay="700ms"
            style="visibility: hidden; animation-delay: 700ms; animation-name: none;"
          >
            Ational exclusive five praises
            service system, only to give you the top service experience
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

    <div class="Our-services">
      <div class="beijing">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated"
            style="visibility: hidden; animation-name: none;"
          >我们的服务</strong>
          <big
            class="wow fadeInDown animated animated"
            data-wow-delay="500ms"
            style="visibility: hidden; animation-delay: 500ms; animation-name: none;"
          >
            Our
            Services
          </big>
          <p
            class="wow fadeInDown animated animated"
            data-wow-delay="600ms"
            style="visibility: hidden; animation-delay: 600ms; animation-name: none;"
          >诚心+匠心=我们的服务</p>
          <small
            class="wow fadeInDown animated animated"
            data-wow-delay="700ms"
            style="visibility: hidden; animation-delay: 700ms; animation-name: none;"
          >
            Sincerity + Ingenuity = Our
            Service
          </small>
        </div>
        <ul class="fw-list">
          <li>
            <div
              class="fu-tu wow slideInLeft animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/jx2.png" alt />
            </div>
          </li>
          <li>
            <div
              class="fu-tu wow slideInRight animated"
              style="visibility: hidden; animation-name: none;"
            >
              <img src="../../assets/wangqi_ysj/jx2.png" alt />
            </div>
          </li>
        </ul>
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
              <a @click="$router.push('/about')">关于网奇</a>
            </h3>
            <p>
              <a href="./about.html#">公司介绍</a>
              <a href="./about.html#">公司愿景</a>
              <a href="./about.html#">服务标准</a>
              <a href="./about.html#">联系我们</a>
            </p>
          </dd>
          <dd
            class="f_p2 wow flipInX animated animated"
            data-wow-delay="250ms"
            style="visibility: hidden; animation-delay: 250ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/about')">热点问题</a>
            </h3>
            <p>
              <a href="./about.html#">苹果账户</a>
              <a href="./about.html#">安卓收费</a>
              <a href="./about.html#">越狱安装</a>
              <a href="./about.html#">开发时间</a>
            </p>
          </dd>
          <dd
            class="f_p3 wow flipInX animated animated"
            data-wow-delay="450ms"
            style="visibility: hidden; animation-delay: 450ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/about')">运营指导</a>
            </h3>
            <p>
              <a href="./about.html#">如何推广</a>
              <a href="./about.html#">如何裂变</a>
              <a href="./about.html#">如何锁客</a>
              <a href="./about.html#">如何复消</a>
            </p>
          </dd>
          <dd
            class="f_p4 wow flipInX animated animated"
            data-wow-delay="650ms"
            style="visibility: hidden; animation-delay: 650ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/about')">服务行业</a>
            </h3>
            <p>
              <a href="./about.html#">商城购物</a>
              <a href="./about.html#">医疗美业</a>
              <a href="./about.html#">教育培训</a>
              <a href="./about.html#">金融区块</a>
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
      .$(".menu .n_about")
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
    window.$(".art-right img").on("click", function() {
      window.layer.open({
        type: 1,
        title: false,
        closeBtn: 1,
        area: ["70%", "70%"],
        shadeClose: true, //点击遮罩关闭
        content:
          '<video id="videoElement" controls="controls" autoplay="autoplay" src="h./../assetsttp://audio.naotianshi.cn/1572832307531666.mp4"></video>'
      });
    });
    // function nTabs(thisObj, Num) {
    //   if (thisObj.className == "active") return;
    //   var tabObj = thisObj.parentNode.id;
    //   var tabList = document.getElementById(tabObj).getElementsByTagName("li");
    //   for (i = 0; i < tabList.length; i++) {
    //     if (i == Num) {
    //       thisObj.className = "active";
    //       document.getElementById(tabObj + "_Content" + i).style.display = "block";
    //     } else {
    //       tabList[i].className = "normal";
    //       document.getElementById(tabObj + "_Content" + i).style.display = "none";
    //     }
    //   }
    // }
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
  <style src="../../assets/wangqi_ysj/layer(1).css">
</style>