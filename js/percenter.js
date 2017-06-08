/**
 * Created by postm on 2017/6/3.
 */
/*
var appbox=new Vue({
	el:'#appbox',
	data:{
		topdata:{
			titles:[
				"标题1",
				"标题2",
				"标题3",
			],
			"titlestatus":0
		},
		appboxdata:{
		}
	},
	methods:{
		getsetdata:function (tabindex) {
			var _this=this;
			this.$http.get('../test'+tabindex+'.json').then(function (msg) {
				_this.appboxdata=msg.body.ullis;
			},function () {
				console.log('获取数据失败')
			})
		},
		supportclick:function (item) {
			// item.codenumber
			alert('支持成功');
			item.havesupportstatus=true;
		},
		tabboxtitleclick:function (index) {
			this.topdata.titlestatus=index;
			switch (index){
				case 0:
					appbox.getsetdata(1);
					break;
				case 1:
					appbox.getsetdata(2);
					break;
				case 2:
					appbox.getsetdata(3);
					break;


			}
		}
	},
	computed:{

	},
	mounted:function () {
		Vue.nextTick(function () {
			appbox.getsetdata(1);
		})
	},
	watch:{

	}
})*/
$(function () {
	$('#tabboxtitlelis>li').click(function () {
		$('#tabboxtitlelis>li').removeClass('select');
		$(this).addClass('select');
		// $('.tabboxcontents').removeClass('show');
		// $('.tabboxcontents').eq($(this).index()).addClass('show');
	})
})