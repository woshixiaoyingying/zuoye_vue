<template>
  <div>
    <header>
      <div class="header">
        <div class="beijing">
          <div class="container">
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
                  <a @click="$router.push('/secondary')" class="hover">
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
    <div class="main-all">
      <div class="beijing">
        <div class="main-after">
          <div class="secondary-left">
            <div class="secondary-banner">
              <div class="banner-left">
                <div
                  class="swiper-container secondary swiper-container-initialized swiper-container-horizontal"
                >
                  <div
                    class="swiper-wrapper"
                    style="transform: translate3d(-1080px, 0px, 0px); transition-duration: 0ms;"
                  >
                    <div class="swiper-slide" style="width: 360px;">
                      <img src="../../assets/wangqi_ysj/banner.jpg" alt />
                    </div>
                    <div class="swiper-slide" style="width: 360px;">
                      <img src="../../assets/wangqi_ysj/banner.jpg" alt />
                    </div>
                    <div class="swiper-slide swiper-slide-prev" style="width: 360px;">
                      <img src="../../assets/wangqi_ysj/banner.jpg" alt />
                    </div>
                    <div class="swiper-slide swiper-slide-active" style="width: 360px;">
                      <img src="../../assets/wangqi_ysj/banner.jpg" alt />
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div
                    class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
                  >
                    <span
                      class="swiper-pagination-bullet"
                      tabindex="0"
                      role="button"
                      aria-label="Go to slide 1"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      tabindex="0"
                      role="button"
                      aria-label="Go to slide 2"
                    ></span>
                    <span
                      class="swiper-pagination-bullet"
                      tabindex="0"
                      role="button"
                      aria-label="Go to slide 3"
                    ></span>
                    <span
                      class="swiper-pagination-bullet swiper-pagination-bullet-active"
                      tabindex="0"
                      role="button"
                      aria-label="Go to slide 4"
                    ></span>
                  </div>
                  <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
              </div>
              <div class="banner-right">
                <ul>
                  <li>
                    <img src="../../assets/wangqi_ysj/gg1.jpg" alt />
                  </li>
                  <li>
                    <img src="../../assets/wangqi_ysj/gg2.jpg" alt />
                  </li>
                </ul>
              </div>
            </div>
            <div class="secondary-switch">
              <div class="switch-effect">
                <div class="nTab">
                  <div class="TabTitle">
                    <ul id="myTab5">
                      <li class="active" onclick="nTabs(this,0);">最新</li>
                      <li class="normal" onclick="nTabs(this,1);">APP资讯</li>
                      <li class="normal" onclick="nTabs(this,2);">APP设计</li>
                      <li class="normal" onclick="nTabs(this,3);">APP运营</li>
                      <li class="normal" onclick="nTabs(this,4);">AOS解密</li>
                      <li class="normal" onclick="nTabs(this,5);">数据榜单</li>
                    </ul>
                  </div>
                  <div class="TabContent">
                    <div id="myTab5_Content0">
                      <ul>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div id="myTab5_Content1" class="none">
                      <ul>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div id="myTab5_Content2" class="none">
                      <ul>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div id="myTab5_Content3" class="none">
                      <ul>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div id="myTab5_Content4" class="none">
                      <ul>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div id="myTab5_Content5" class="none">
                      <ul>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="secondary-new-list">
                            <div class="pic">
                              <img src="../../assets/wangqi_ysj/tu.jpg" alt />
                            </div>
                            <div class="intro">
                              <h2>不会产品规划的企业，都是在盲打</h2>
                              <p>产品规划怎么做？本篇文章中，笔者从多个方面分解了产品规划如何做以及为什么要做，一起 来看看吧。很多企业完全没有产品线规划的意识</p>
                              <div class="info">
                                <div class="info-left">
                                  <div class="time">2019/07/23</div>
                                </div>
                                <div class="info-right">
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-01.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-02.png" alt /> 2014
                                  </span>
                                  <span>
                                    <img src="../../assets/wangqi_ysj/icon-03.png" alt /> 2014
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="secondary-right">
            <div class="second-one">
              <img src="../../assets/wangqi_ysj/right-gg.jpg" alt />
            </div>
            <div class="second-two">
              <img src="../../assets/wangqi_ysj/right-gg2.jpg" alt />
            </div>
            <div class="second-read read-default">
              <div class="read-border">
                <div class="tcon">
                  <h3>热门阅读</h3>
                  <a @click="$router.push('/secondary')">查看更多</a>
                </div>
                <div class="mcon">
                  <div class="pic">
                    <img src="../../assets/wangqi_ysj/head-portrait.jpg" alt />
                  </div>
                  <div class="intro">
                    <h3>网奇</h3>
                    <p>畅销书《网奇是怎么成功的》、《网奇可以 领先中国的攻略》作者</p>
                  </div>
                  <div class="info">
                    <a @click="$router.push('/secondary')">
                      <img src="../../assets/wangqi_ysj/more.png" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="second-write read-default">
              <div class="read-border">
                <div class="tcon">
                  <h3>推荐作家</h3>
                  <a @click="$router.push('/secondary')">查看更多</a>
                </div>
                <div class="mcon">
                  <div class="pic">
                    <img src="../../assets/wangqi_ysj/head-portrait.jpg" alt />
                  </div>
                  <div class="intro">
                    <h3>网奇</h3>
                    <p>畅销书《网奇是怎么成功的》、《网奇可以 领先中国的攻略》作者</p>
                  </div>
                  <div class="info">
                    <a @click="$router.push('/secondary')">
                      <img src="../../assets/wangqi_ysj/more.png" alt />
                    </a>
                  </div>
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
              <a @click="$router.push('/secondary')">关于网奇</a>
            </h3>
            <p>
              <a href="./secondary.html#">公司介绍</a>
              <a href="./secondary.html#">公司愿景</a>
              <a href="./secondary.html#">服务标准</a>
              <a href="./secondary.html#">联系我们</a>
            </p>
          </dd>
          <dd
            class="f_p2 wow flipInX animated animated"
            data-wow-delay="250ms"
            style="visibility: hidden; animation-delay: 250ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/secondary')">热点问题</a>
            </h3>
            <p>
              <a href="./secondary.html#">苹果账户</a>
              <a href="./secondary.html#">安卓收费</a>
              <a href="./secondary.html#">越狱安装</a>
              <a href="./secondary.html#">开发时间</a>
            </p>
          </dd>
          <dd
            class="f_p3 wow flipInX animated animated"
            data-wow-delay="450ms"
            style="visibility: hidden; animation-delay: 450ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/secondary')">运营指导</a>
            </h3>
            <p>
              <a href="./secondary.html#">如何推广</a>
              <a href="./secondary.html#">如何裂变</a>
              <a href="./secondary.html#">如何锁客</a>
              <a href="./secondary.html#">如何复消</a>
            </p>
          </dd>
          <dd
            class="f_p4 wow flipInX animated animated"
            data-wow-delay="650ms"
            style="visibility: hidden; animation-delay: 650ms; animation-name: none; height: 150px;"
          >
            <h3>
              <a @click="$router.push('/secondary')">服务行业</a>
            </h3>
            <p>
              <a href="./secondary.html#">商城购物</a>
              <a href="./secondary.html#">医疗美业</a>
              <a href="./secondary.html#">教育培训</a>
              <a href="./secondary.html#">金融区块</a>
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
      .$(".menu .n_coll")
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
    new window.Swiper(".secondary", {
      spaceBetween: 0,
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
<style src="../../assets/wangqi_ysj/secondary.css"></style>
<style scoped>
@media only screen and (min-width: 48em) {
  .head_fx {
    display: none;
  }
}

header {
  position: relative;
  background: #37cbbe;
}

.menu a.hover,
.menu a:hover {
  color: #fff;
}
</style>