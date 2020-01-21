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
                <a @click="$router.push('/contact')" class="hover">
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

    <div class="sg_s_contact">
      <div class="container">
        <div class="contact-yop">
          <em
            class="wow zoomInUp animated animated"
            style="visibility: visible; animation-name: zoomInUp;"
          >联系我们</em>
          <p
            class="wow zoomInDown animated animated"
            data-wow-delay=".4s"
            style="visibility: visible; animation-delay: 0.4s; animation-name: zoomInDown;"
          >Contact us</p>
        </div>
        <div class="contact-list">
          <ul>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="0.5s"
              style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;"
            >
              <a href="./contact.html#">
                <div class="inyro">
                  <h3>QQ与微信沟通</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="1s"
              style="visibility: visible; animation-delay: 1s; animation-name: fadeInLeft;"
            >
              <a href="./contact.html#">
                <div class="inyro">
                  <h3>在线沟通</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="1.5"
              style="visibility: visible; animation-delay: 1.5s; animation-name: fadeInRight;"
            >
              <a href="./contact.html#">
                <div class="inyro">
                  <h3>投诉建议</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="2"
              style="visibility: visible; animation-delay: 2s; animation-name: fadeInRight;"
            >
              <a href="./contact.html#">
                <div class="inyro">
                  <h3>公司地址</h3>
                </div>
              </a>
            </li>
            <li
              class="wow fadeInRight animated animated animated animated"
              data-wow-delay="2.5"
              style="visibility: visible; animation-delay: 2.5s; animation-name: fadeInRight;"
            >
              <a href="./contact.html#">
                <div class="inyro">
                  <h3>常见问题</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="top-bg">
      <div class="content3" id="content3">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated animated"
              style="visibility: visible; animation-name: bounceInDown;"
            >电话与微信沟通</strong>
            <big
              class="wow fadeInDown animated animated animated"
              data-wow-delay="500ms"
              style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
            >
              IPhone and Wechat
              Communication
            </big>
            <p
              class="wow fadeInDown animated animated animated"
              data-wow-delay="600ms"
              style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
            >您可以用电话或微信来和我们沟通</p>
            <small
              class="wow fadeInDown animated animated animated"
              data-wow-delay="700ms"
              style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
            >
              You can use IPhone or
              Wechat to communicate with us.
            </small>
          </div>
          <ul class="online1 fixbox">
            <li
              class="qq wow fadeInRight animated animated"
              style="visibility: visible; animation-name: fadeInRight;"
            >
              <h1>电话沟通</h1>
              <dl>
                <dd>王经理：139********</dd>
                <dd>韩经理：139********</dd>
                <dd>胡经理：139********</dd>
              </dl>
            </li>
            <li
              class="wx wow fadeInLeft animated animated"
              style="visibility: visible; animation-name: fadeInLeft;"
            >
              <h1>微信沟通</h1>
              <dl class="fixbox">
                <dt>
                  <img src="../../assets/wangqi_ysj/ewm.jpg" alt />
                </dt>
                <dd>
                  <p>
                    微信扫码沟通
                    <img src="../../assets/wangqi_ysj/wxico.png" alt />
                  </p>
                  <p>
                    验证信息请写
                    <span>"直销王"</span>
                  </p>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="content2" id="content2">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated animated"
              style="visibility: visible; animation-name: bounceInDown;"
            >在线沟通</strong>
            <big
              class="wow fadeInDown animated animated animated"
              data-wow-delay="500ms"
              style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
            >Online Communication</big>
            <p
              class="wow fadeInDown animated animated animated"
              data-wow-delay="600ms"
              style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
            >直接与直销顾问在线沟通</p>
            <small
              class="wow fadeInDown animated animated animated"
              data-wow-delay="700ms"
              style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
            >
              Direct Online Communication
              with Direct Sales Consultants
            </small>
          </div>
          <ul class="online fixbox">
            <li
              class="wow fadeInUp animated animated"
              data-wow-delay="0"
              style="visibility: visible; animation-name: fadeInUp;"
            >
              <div class="qq-bg">
                <img src="../../assets/wangqi_ysj/tx1.jpg" class="tx" alt />
                <h2>韩顾问</h2>
                <p>
                  QQ号码：
                  <a
                    target="_blank"
                    href="http://p.qiao.baidu.com/cps/chat?siteId=8958442&amp;userId=5935590"
                  >
                    <img src="../../assets/wangqi_ysj/qq-bg.png" alt />
                  </a>
                </p>
                <p>联系方式：139********</p>
              </div>
            </li>
            <li
              class="wow fadeInUp animated animated"
              data-wow-delay=".2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;"
            >
              <div class="qq-bg">
                <img src="../../assets/wangqi_ysj/tx2.jpg" class="tx" alt />
                <h2>胡顾问</h2>
                <p>
                  QQ号码：
                  <a
                    target="_blank"
                    href="http://p.qiao.baidu.com/cps/chat?siteId=8958442&amp;userId=5935590"
                  >
                    <img src="../../assets/wangqi_ysj/qq-bg.png" alt />
                  </a>
                </p>
                <p>联系方式：139********</p>
              </div>
            </li>
            <li
              class="wow fadeInUp animated animated"
              data-wow-delay=".4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;"
            >
              <div class="qq-bg">
                <img src="../../assets/wangqi_ysj/tx3.jpg" alt class="tx" />
                <h2>田顾问</h2>
                <p>
                  QQ号码：
                  <a
                    target="_blank"
                    href="http://p.qiao.baidu.com/cps/chat?siteId=8958442&amp;userId=5935590"
                  >
                    <img src="../../assets/wangqi_ysj/qq-bg.png" alt />
                  </a>
                </p>
                <p>联系方式：139********</p>
              </div>
            </li>
            <li
              class="wow fadeInUp animated animated"
              data-wow-delay=".6s"
              style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;"
            >
              <div class="qq-bg">
                <img src="../../assets/wangqi_ysj/tx4.jpg" alt class="tx" />
                <h2>王顾问</h2>
                <p>
                  QQ号码：
                  <a
                    target="_blank"
                    href="http://p.qiao.baidu.com/cps/chat?siteId=8958442&amp;userId=5935590"
                  >
                    <img src="../../assets/wangqi_ysj/qq-bg.png" alt />
                  </a>
                </p>
                <p>联系方式：139********</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="proposal">
      <div class="one_f" id="section-2">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated animated"
              style="visibility: visible; animation-name: bounceInDown;"
            >投诉建议</strong>
            <big
              class="wow fadeInDown animated animated animated"
              data-wow-delay="500ms"
              style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
            >Complaint Suggestions</big>
            <p
              class="wow fadeInDown animated animated animated"
              data-wow-delay="600ms"
              style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
            >我们很开心您能和我们提建议，让我们变得更完美</p>
            <small
              class="wow fadeInDown animated animated animated"
              data-wow-delay="700ms"
              style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
            >
              We are very happy that you
              can give us some advice to make us more perfect.
            </small>
          </div>
          <div
            class="three wow fadeInUp animated animated"
            style="visibility: visible; animation-name: fadeInUp;"
          >
            <div class="app_one1">
              <strong>投诉建议</strong>
            </div>

            <!-- <iframe src="../../assets/wangqi_ysj/biaodan.html" frameborder="0" width="100%" height="500"></iframe> -->
            <biao-dan></biao-dan>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bg">
      <div class="content4" id="content4">
        <div class="index_top">
          <strong
            class="wow bounceInDown animated animated animated"
            style="visibility: visible; animation-name: bounceInDown;"
          >公司地址</strong>
          <big
            class="wow fadeInDown animated animated animated"
            data-wow-delay="500ms"
            style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
          >Company address</big>
          <p
            class="wow fadeInDown animated animated animated"
            data-wow-delay="600ms"
            style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
          >外地客户，可乘飞机到北戴河飞机场，乘火车到秦皇岛站或山海关站</p>
          <small
            class="wow fadeInDown animated animated animated"
            data-wow-delay="700ms"
            style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
          >
            Foreign customers can fly to
            Beidaihe Airport and train to Qinh
          </small>
        </div>
        <div class="map beijing">
          <img src="../../assets/wangqi_ysj/map.jpg" class="map-pc" />
          <img src="../../assets/wangqi_ysj/map-mobile.jpg" class="map-mobile" />
        </div>
      </div>
      <div class="four" id="section-3">
        <div class="beijing">
          <div class="index_top">
            <strong
              class="wow bounceInDown animated animated animated"
              style="visibility: visible; animation-name: bounceInDown;"
            >常见问题</strong>
            <big
              class="wow fadeInDown animated animated animated"
              data-wow-delay="500ms"
              style="visibility: visible; animation-delay: 500ms; animation-name: fadeInDown;"
            >Common problem</big>
            <p
              class="wow fadeInDown animated animated animated"
              data-wow-delay="600ms"
              style="visibility: visible; animation-delay: 600ms; animation-name: fadeInDown;"
            >客户，品质，满意</p>
            <small
              class="wow fadeInDown animated animated animated"
              data-wow-delay="700ms"
              style="visibility: visible; animation-delay: 700ms; animation-name: fadeInDown;"
            >
              Customer, Quality,
              Satisfaction
            </small>
          </div>
          <div class="zx_four">
            <div class="swiper-container" style="cursor: -webkit-grab;">
              <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-visible swiper-slide-active">
                  <dl>
                    <dt>
                      <div
                        class="qust zx_open"
                        onclick="document.getElementById(&#39;tc1&#39;).style.display=&#39;block&#39;"
                      >
                        <h4>Q</h4>
                        <p>如果项目过程中客户提出超出合同范围，或与原合同？</p>
                      </div>
                      <div class="answ">
                        <h4>A</h4>
                        <p>答：</p>
                        <p>针对客户提出的超出合同范围的需求，将根据需求评估需要追加的开发费用并在签订相应的补充协议后开始安排和落实相对开发工作。针。。。。</p>
                      </div>
                    </dt>
                    <dt class="zxodd">
                      <div
                        class="qust zx_open"
                        onclick="document.getElementById(&#39;tc2&#39;).style.display=&#39;block&#39;"
                      >
                        <h4>Q</h4>
                        <p>为什么要填写项目调查表？</p>
                      </div>
                      <div class="answ">
                        <h4>A</h4>
                        <p>答：</p>
                        <p>项目调查表，是关于项目设计，开发方面需要提前征求客户意见的调查表，体现了客户对项目的细节要求。准确完善的填写项目调查表将有。。。</p>
                      </div>
                    </dt>
                    <dt>
                      <div
                        class="qust zx_open"
                        onclick="document.getElementById(&#39;tc3&#39;).style.display=&#39;block&#39;"
                      >
                        <h4>Q</h4>
                        <p>项目开发阶段有哪些流程？</p>
                      </div>
                      <div class="answ">
                        <h4>A</h4>
                        <p>答：</p>
                        <p>
                          1.项目启动
                          <b>1)项目启动的前提条件：签订开发合同，支付开发首款，提供项目资料</b>
                        </p>
                        <b></b>
                      </div>
                      <b></b>
                    </dt>
                    <b>
                      <dt class="zxodd">
                        <div
                          class="qust zx_open"
                          onclick="document.getElementById(&#39;tc4&#39;).style.display=&#39;block&#39;"
                        >
                          <h4>Q</h4>
                          <p>如果我们自己维护，管理难度大吗，需要请专门的网站</p>
                        </div>
                        <div class="answ">
                          <h4>A</h4>
                          <p>答：</p>
                          <p>难度不大，不需要请专门的管理员，我们开发的网站后台管理方便，发布新闻和上传产品，操作就像发邮件一样的方便，但有些客户的产品。。。</p>
                        </div>
                      </dt>
                      <dt>
                        <div
                          class="qust zx_open"
                          onclick="document.getElementById(&#39;tc5&#39;).style.display=&#39;block&#39;"
                        >
                          <h4>Q</h4>
                          <p>如果我们的网站有一些内容需要更新是否还要收费呢？</p>
                        </div>
                        <div class="answ">
                          <h4>A</h4>
                          <p>答：</p>
                          <p>我们提供一年的网站技术维护，比如网站打不开、网站出现乱码、网站页面显示不正确、网站给黑客攻击等等，我们都会及时给予免费维护。。。</p>
                        </div>
                      </dt>
                      <dt class="zxodd">
                        <div
                          class="qust zx_open"
                          onclick="document.getElementById(&#39;tc6&#39;).style.display=&#39;block&#39;"
                        >
                          <h4>Q</h4>
                          <p>网站站内seo优化有哪些技巧吗？</p>
                        </div>
                        <div class="answ">
                          <h4>A</h4>
                          <p>答：</p>
                          <p>
                            1、清晰的导航是网站被良好收录的关键
                            <b>蜘蛛爬行网站首先是爬到网站首页，然后会通过网站导航浏览整。。。</b>
                          </p>
                          <b></b>
                        </div>
                        <b></b>
                      </dt>
                      <b></b>
                    </b>
                  </dl>
                  <b>
                    <b></b>
                  </b>
                </div>
                <b>
                  <b></b>
                </b>
              </div>
              <b>
                <b></b>
              </b>
            </div>
            <b>
              <b>
                <div class="pagination">
                  <span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
                </div>
                <div class="clear"></div>
              </b>
            </b>
          </div>
          <b>
            <b>
              <div class="clear"></div>
            </b>
          </b>
        </div>
        <b>
          <b></b>
        </b>
      </div>
      <b>
        <b></b>
      </b>
    </div>
    <b>
      <b>
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
              <a
                href="http://p.qiao.baidu.com/cps/chat?siteId=8958442&amp;userId=5935590"
                class="m_f1"
              >
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
                  <a @click="$router.push('/contact')">关于网奇</a>
                </h3>
                <p>
                  <a href="./contact.html#">公司介绍</a>
                  <a href="./contact.html#">公司愿景</a>
                  <a href="./contact.html#">服务标准</a>
                  <a href="./contact.html#">联系我们</a>
                </p>
              </dd>
              <dd
                class="f_p2 wow flipInX animated animated animated"
                data-wow-delay="250ms"
                style="visibility: visible; animation-delay: 250ms; animation-name: flipInX; height: 150px;"
              >
                <h3>
                  <a @click="$router.push('/contact')">热点问题</a>
                </h3>
                <p>
                  <a href="./contact.html#">苹果账户</a>
                  <a href="./contact.html#">安卓收费</a>
                  <a href="./contact.html#">越狱安装</a>
                  <a href="./contact.html#">开发时间</a>
                </p>
              </dd>
              <dd
                class="f_p3 wow flipInX animated animated animated"
                data-wow-delay="450ms"
                style="visibility: visible; animation-delay: 450ms; animation-name: flipInX; height: 150px;"
              >
                <h3>
                  <a @click="$router.push('/contact')">运营指导</a>
                </h3>
                <p>
                  <a href="./contact.html#">如何推广</a>
                  <a href="./contact.html#">如何裂变</a>
                  <a href="./contact.html#">如何锁客</a>
                  <a href="./contact.html#">如何复消</a>
                </p>
              </dd>
              <dd
                class="f_p4 wow flipInX animated animated animated"
                data-wow-delay="650ms"
                style="visibility: visible; animation-delay: 650ms; animation-name: flipInX; height: 150px;"
              >
                <h3>
                  <a @click="$router.push('/contact')">服务行业</a>
                </h3>
                <p>
                  <a href="./contact.html#">商城购物</a>
                  <a href="./contact.html#">医疗美业</a>
                  <a href="./contact.html#">教育培训</a>
                  <a href="./contact.html#">金融区块</a>
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
      </b>
    </b>
  </div>
</template>

<script>
import BiaoDan from "./BiaoDan";
export default {
  components: {
    BiaoDan
  },
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
      .$(".menu .n_contact")
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

    window.Swiper(".rotary", {
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
    window.Swiper(".banners", {
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
    window.Swiper(".team", {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    window.Swiper(".teams", {
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
<style scoped src="../../assets/wangqi_ysj/contact.css"></style>
<style scoped>
@media only screen and (min-width: 48em) {
  .head_fx {
    display: none;
  }
}
</style>