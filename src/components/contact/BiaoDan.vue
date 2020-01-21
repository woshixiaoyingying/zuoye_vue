<template>
  <div>
    <form class="form-horizontal" method="post" action="./biaodan.html" target>
      <ul class="three1">
        <li>
          <span>
            <em>*</em>订单类型：
          </span>
          <p>
            <label>
              <input type="radio" class="three_i" name="post_type" value="1" checked="checked" />
              咨询
            </label>
            <label>
              <input type="radio" class="three_i" name="post_type" value="2" />
              建议
            </label>
            <label>
              <input type="radio" class="three_i" name="post_type" value="3" />
              投诉
            </label>
          </p>
        </li>
        <li class="three1_w">
          <span>
            <em>*</em>姓&nbsp;&nbsp;名：
          </span>
          <p>
            <input class="two_w1 two_i form-control" id="post_name" />
          </p>
        </li>
        <li class="three1_w1">
          <span>
            <em>*</em>电&nbsp;&nbsp;话：
          </span>
          <p>
            <input class="two_w1 two_i form-control" id="post_tel" />
          </p>
        </li>
        <li>
          <span>
            <em>*</em>订单内容：
          </span>
          <p>
            <textarea class="two_t" rows="5" id="post_content"></textarea>
          </p>
        </li>
      </ul>
      <div class="two1">
        <input type="submit" class="two1_c rounded" id="dosendbtn" value="发送订单" />
        <input type="reset" class="two1_c1 rounded" value="重新填写" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    function is_mobile(mobile) {
      return /^1[3|5|6|7|8][0-9][0-9]{8}$/.test(mobile);
    }
    window.$(function() {
      window.$("#dosendbtn").click(function() {
        var un = window.$.trim(window.$("#post_name").val()),
          um = window.$.trim(window.$("#post_tel").val()),
          uc = window.$("#post_content").val();
        if (!un || !is_mobile(um) || !uc) {
          alert("请您填写姓名、电话和订单内容");
          return false;
        } else {
          window
            .$("#dosendbtn")
            .val("信息提交中...")
            .attr("disabled", true);
          var type = window.$("input:radio[name=post_type]:checked").val();
          window.$.post(
            "post.php",
            { userName: un, mobile: um, content: uc, type: type },
            function(json) {
              if (json.error == 1) {
                // console.log(json.msg);
                alert(json.msg);
              } else {
                // console.log(json.msg);
                alert(json.msg);
              }
              window.$("#post_name,#post_tel,#post_content").val("");
              window
                .$("#dosendbtn")
                .val("提交")
                .attr("disabled", false);
            },
            "json"
          );
        }
      });
    });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: 12px;
  font-family: "微软雅黑";
}
li {
  list-style: none outside none;
}

.two_1 {
  clear: both;
  overflow: hidden;
  padding: 10px;
}
.two_1 li {
  clear: both;
  overflow: hidden;
  line-height: 30px;
  font-size: 12px;
  padding: 5px 0;
}
.two_1 li span {
  float: left;
  text-align: right;
  width: 65px;
  margin-right: 10px;
  padding: 3px 0;
}
.two_1 li span em {
  color: #f00;
  margin-right: 5px;
  font-style: normal;
}
.two_1 li p {
  overflow: hidden;
  padding: 3px;
}
.two_i {
  border: 1px solid #d6d6d6;
  line-height: 28px;
  height: 30px;
  padding: 0 5px;
  font-size: 100%;
}
.two_w1 {
  width: 100%;
}
.two_w2 {
  width: 50%;
}
.two_w3 {
  width: 30%;
}
.two_i1 {
  margin: 0 5px;
}
.two_2 {
  clear: both;
  overflow: hidden;
  padding: 10px;
}
.two_2 table {
  border: 1px solid #d6d6d6;
  background: #f8f8f8;
  font-size: 12px;
  line-height: 2;
}
.two_2 th,
.two_2 td {
  padding: 10px;
  font-weight: lighter;
}
.two_2 th span {
  color: #f00;
  margin-right: 5px;
}
.two_2 td input {
  margin-right: 5px;
}
.two_2 td {
  color: #818181;
}
.two_1.two_3 li span {
  width: auto;
}

.two_bg {
  /* background: url(../images/tine.jpg) no-repeat right center; */
  background-size: auto 100%;
}
.two_3 p label {
  margin: 0 5px;
}
.two_t {
  border: 1px solid #d6d6d6;
  line-height: 22px;
  padding: 5px;
  clear: both;
  overflow: hidden;
  resize: none;
  outline: none;
  width: 100%;
  font-size: 100%;
}

.two1 {
  clear: both;
  overflow: hidden;
  padding: 20px 0;
  text-align: center;
}
.two1 input {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  padding: 0 5%;
  margin: 0 5%;
  line-height: 40px;
  display: inline-block;
  border: 0;
}
.two1_c {
  background: #50c3b2;
  color: #fff;
}
.two1_c1 {
  background: #d9d9d9;
}

.three1 {
  padding: 10px;
  clear: both;
  overflow: hidden;
}
.three1 li {
  clear: both;
  overflow: hidden;
  padding: 5px 0;
  line-height: 30px;
}
.three1 li span {
  float: left;
  width: 85px;
  margin-right: 10px;
  display: inline-block;
  padding: 3px 0;
}
.three1 li span em {
  color: #f00;
  margin-right: 5px;
  font-style: normal;
}
.three1 li p {
  overflow: hidden;
  padding: 3px;
}
.three1 li p label {
  margin-right: 10px;
}
.three1 li p label input.three_i {
  margin-right: 5px;
}
.three_i1 {
  width: 40%;
}
.three1 li p em {
  display: inline-block;
  border: 1px solid #d6d6d6;
  margin-left: 10px;
}
.three1 li p em img {
  height: 100%;
  vertical-align: top;
}
@media only screen and (min-width: 768px) {
  .two_1 li {
    float: left;
    width: 50%;
    clear: none;
    line-height: 40px;
    font-size: 16px;
    padding: 8px 0;
  }
  .two_1 li span {
    width: 95px;
  }
  .two_i {
    line-height: 38px;
    height: 40px;
  }
  .two_w3 {
    width: 30%;
  }
  .two_2 {
    padding: 20px;
  }
  .two_2 table {
    font-size: 14px;
  }
  .two_2 th {
    font-size: 16px;
    width: 150px;
  }
  .two_2 td p {
    float: left;
    width: 50%;
    padding: 3px 0;
  }
  .two_bg {
    /* background: url(../images/tine.jpg) no-repeat right center; */
    background-size: auto 100%;
  }
  .two_1.two_3 {
    padding: 0 20px;
  }
  .two1 input {
    line-height: 50px;
    font-size: 18px;
  }
  .two_1.two_3 li.two_texta {
    width: 100%;
    padding: 15px 0 0;
  }
  .three1 {
    padding: 20px 200px;
    font-size: 16px;
  }
  .three1 li {
    padding: 10px 0;
    line-height: 40px;
  }
  .three1 li span {
    width: 100px;
    text-align: right;
  }
  .three1 li.three1_w {
    float: left;
    width: 48%;
    clear: none;
  }
  .three1 li.three1_w1 {
    float: right;
    width: 48%;
    clear: none;
  }
  .three1 li p label {
    margin-right: 40px;
  }
  .three1 li p label input.three_i {
    margin-right: 10px;
  }
  .two1_c,
  .rounded {
    font-family: "微软雅黑";
  }
}
</style>