(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{647:function(p,t,e){"use strict";e.r(t);var l=e(2),_=Object(l.a)({},(function(){var p=this,t=p.$createElement,e=p._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":p.$parent.slotKey}},[e("p",[p._v("需求分析及设计")]),p._v(" "),e("p",[e("a",{attrs:{href:""}},[p._v("5.1")]),p._v("需求1：根据固定模板文件，输入相应内容，输出成完整表格文件（包括文件内容格式输出正确；常用输出文件类型：*.docx）")]),p._v(" "),e("p",[p._v("因为输出的格式都是固定的，所以可以使用模板引擎的技术，生成模板文件。在python中使用模板引擎库docxtpl可以生成.docx格式的模板文件。首先要做一个docx格式的模板文件，如下图所示：")]),p._v(" "),e("p",[p._v("![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image002.jpg)")]),p._v(" "),e("p",[p._v("其中{{}}两个大括号，这个是docxtpl模板引擎的语法，两个大括号里面是变量名称，通过这些变量名称，程序就可以动态的生成不同内容的固定格式的模板文件。")]),p._v(" "),e("p",[p._v("具体实现过程如下：")]),p._v(" "),e("p",[p._v("程序获取到表单提交的内容后，会把表单字段对应的输入参数赋值给模板引擎对应的变量，例如表单提交的案件名称是：“xxx网络诈骗案件”，则“xxx网络诈骗案件”这个输入参数会赋值给两个大括号里的anjianname这个变量。当模板文件里面所有的变量都赋值成功以后，再调用docxtpl模板引擎库输出模板文件的API，就生成模板文件了。")]),p._v(" "),e("p",[e("a",{attrs:{href:""}},[p._v("5.2")]),p._v("需求2：错别字自动识别")]),p._v(" "),e("p",[p._v("分析：要识别客户输入的错别字，首先要获取到客户输入的内容，然后才能进一步做错别字的判断。我们使用pyqt5的QTextEdit部件获取用户输入的内容，具体是调用QTextEdit的toPlainText()方法获取用户输入的文本内容。")]),p._v(" "),e("p",[p._v("其次当获取到用户输入的内容后，我们使用百度智能文本纠错API来识别用户输入的文本内容是否有错别字。要使用百度智能文本纠错API，首先要在百度开发平台注册账号、建立应用，然后获取到调用API 的key和密钥等信息就可以调用百度智能文本纠错API了。")]),p._v(" "),e("p",[p._v("如果识别出错别字后，最后还需要对错别字进行高亮显示，可以醒目的提示用户，错别字是什么，以及错别字出现的位置。对错别字进行高亮显示，主要使用到了pyqt5的QTextEdit部件的游标对象QTextCursor，该对象可以在文本的任意位置对用户输入的内容操作修改。具体高亮实现过程如下：")]),p._v(" "),e("p",[p._v("首先获取错别字在用户输入的文本内容中的位置。比如，用户输入的文本内容是“同意，已力案”，则错别字是力案，因为正确的词语应该是立案。力案的力字在“同意，已力案”这句话中位于第4个位置（下标从0开始），则游标对象QTextCursor会移动到错误字所在位置也就是第4个位置，然后根据错别字“力案”的长度往后移动，也就是往后再移动2个单位，这样游标对象QTextCursor就把错别字“力案”选中了，就可以对错别字进行高亮设置，设置后，在程序界面就高亮展示了。")]),p._v(" "),e("p",[p._v("5.3 程序UI界面设计")]),p._v(" "),e("p",[p._v("本程序使用pyqt5的UI界面设计工具QT designer![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image004.jpg)画的UI界面，QT designer是专门用于帮助pyqt5开发者设计pyqt5程序UI界面的设计工具，可以大大提高开发者的开发效率。我们使用QT designer主要设计了两个UI界面，一个是“网络犯罪案件立案登记表“UI界面，一个是“立案决定书“UI界面。分别见如下截图：")]),p._v(" "),e("p",[p._v("![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image006.jpg)![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image008.jpg)")]),p._v(" "),e("p",[p._v("这两个UI界面整体使用pyqt5中的Grid Layout，也就是网格布局。使用网格布局可以更灵活的放置部件的位置，从而可以设计出更满足自己需要的UI界面。其中“案由”、“案情摘要”、“办理情况“、“领导批示”、“审批意见”、“办理单位意见”、“法制员审核意见”都是使用pyqt5中的文本域部件QTextEdit，因为要实现错别字识别后高亮显示的功能需求，而pyqt5中的文本域部件QTextEdit可以借助游标对象QTextCursor的高亮显示文本字符方法实现此需求，所以在考虑设计使用什么部件作为用户输入文本数据的部件时，都使用文本域部件QTextEdit来作为用户输入文本数据的部件。")]),p._v(" "),e("p",[p._v("“接待人员签字日期”UI和“申诉人签字日期”UI都使用pyqt5的日期部件QDateEdit，该部件可以让用户输入日期数据。我们对此做了一点小优化，就是让日期部件QDateEdit默认都显示今天，因为大多数情况下“接待人员签字日期”和“申诉人签字日期”都是今天，这样设计，用户就不用再手动选择日期，方便了用户使用。如果“接待人员签字日期”和“申诉人签字日期”不是今天，也可以手动选择具体的日期，如下图所示：")]),p._v(" "),e("p",[p._v("![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image010.jpg)")]),p._v(" "),e("p",[p._v("在“网络犯罪案件立案登记表“UI界面中，我们还设计了必填字段：“案件名”、“案件编号”、“姓名”、“身份证”等，这些是需要用户必须填写的内容，如果不填写这些内容，那么表单的内容是不完整的，那么这个表单是没有意义的，这种表单是我们不想要的。所以我们在UI界面上，在必填字段的前面都加上红色的“*”，用于醒目的提示用户，这些字段是必须填写的内容，如下图所示UI界面：")]),p._v(" "),e("p",[p._v("![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image012.jpg)当然如果用户就是不填写，则当用户点击生成文档按钮时，程序也会有对应的必填字段是否填写的校验，这属于程序代码逻辑的实现部分。")]),p._v(" "),e("p",[p._v("当UI界面设计完成后，可以一键生成python代码，并且可以很方便的复制代码，如下图所示：")]),p._v(" "),e("p",[p._v("![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image014.jpg)")]),p._v(" "),e("p",[p._v("使用pyqt5 生成的代码，复制到自己的程序里，程序运行后生成的UI界面和使用QT designer画的UI界面是一样的，这样大大节省了开发时间，而且效果非常好。如下图所示：")]),p._v(" "),e("p",[p._v("![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image016.jpg) ![](file:///C:\\Users\\YANGJI~1\\AppData\\Local\\Temp\\msohtmlclip1\\01\\clip_image018.jpg)")])])}),[],!1,null,null,null);t.default=_.exports}}]);