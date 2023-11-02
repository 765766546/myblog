(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{651:function(e,_,s){"use strict";s.r(_);var v=s(2),n=Object(v.a)({},(function(){var e=this,_=e.$createElement,s=e._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("学生用电管理系统设计实现")]),e._v(" "),s("p",[e._v("1、  用户登录功能设计实现")]),e._v(" "),s("p",[e._v("单独开发一个登录界面，主要使用这个类class AppWidget_login(QWidget)，这个类就是等界面类。这个类里面的登录方法是：def onLogin(self)。def onLogin(self)实现了所有登录相关的逻辑。具体实现说明如下：")]),e._v(" "),s("p",[e._v("首先获取用户输入的账号和密码以及选择的是管理员还是学生登录，判断用户有没有输入用户名和密码，如果用户名或者密码有一个为空字符串那么就说明用户没有输入用户名或者没有输入密码，程序停止继续往下运行，并且提示用户“'用户名或密码有误，请重新输入。'”；如果这一步校验通过，则根据用户输入的用户名和密码去数据库查询，看有没有相应的记录，如果数据库没有记录，则说明这个用户不存在，则不允许登录，程序停止继续往下运行，并且提示用户“'用户名或密码有误，请重新输入。'”；如果这一步也校验通过，则说明用户是合法的，则允许登录，这个时候要创建程序的主界面，通过代码：mainwindow(self.mysqlClient)来创建程序主界面，在创建程序主界面时，将主界面对象的索引对象赋值给共享变量SI.mainWin ，具体代码是：SI.mainWin= mainwindow(self.mysqlClient)，然后调用SI.mainWin.show()方法让主界面显示。调用  self.hide()方法让登录界面隐藏，这样就只看到程序主界面看不到登录页面了，通过显示和隐藏的方法实现登录界面和程序主界面之间的切换。")]),e._v(" "),s("p",[e._v("2、  程序退出功能设计实现")]),e._v(" "),s("p",[e._v("def onLogout(self)这个方法就是实现程序退出功能，具体实现如下：")]),e._v(" "),s("p",[e._v("SI.mainWin.hide()这句代码让程序主界面隐藏，self.show()这句代码让登录界面显示，也是通过显示和隐藏的方法实现登录界面和程序主界面之间的切换。")]),e._v(" "),s("p",[e._v("3、  程序关闭功能设计实现")]),e._v(" "),s("p",[e._v("def onLogclose(self)这句代码实现了程序关闭功能的相关逻辑，该方法会监听点击关闭事件，当用户点击关闭时，会触发此方法被调用。会关闭程序主界面和登录界面，具体代码如下：")]),e._v(" "),s("p",[e._v("SI.mainWin.close()")]),e._v(" "),s("p",[e._v("self.close()")]),e._v(" "),s("p",[e._v("4、  数据库连接池和主程序界面设计实现")]),e._v(" "),s("p",[e._v("在代码中使用pymysql python库来访问和操作mysql数据库。具体代码如下：")]),e._v(" "),s("p",[e._v("在mysqlclient1.py文件中，首先读取数据库连接相关的各项配置，config.txt文件是保存数据库连接信息的配置文件。")]),e._v(" "),s("p",[e._v("读取配置文件的代码如下：")]),e._v(" "),s("p",[e._v("try:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('with open("config.txt",\n')])])]),s("p",[e._v('encoding="utf-8") as f:')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("config = eval(f.read())\n")])])]),s("p",[e._v("except\nFileNotFoundError:")]),e._v(" "),s("p",[e._v("print('请检查config.txt文件是否与程序位于同一路径。')")]),e._v(" "),s("p",[e._v("except\nSyntaxError:")]),e._v(" "),s("p",[e._v("print('请检查配置文件格式是否正确。')")]),e._v(" "),s("p",[e._v("读取到数据库连接配置信息后，开始创建数据库连接池，之所以使用数据库连接池，是为了性能考虑，因为如果每次访问数据库都创建新的连接，性能开销比较大，使用数据库连接池可以解决这个问题。具体代码如下：")]),e._v(" "),s("p",[e._v("self."),s("strong",[e._v("class")]),e._v(".__pool =\nPersistentDB(creator=pymysql, **self.data_info)")]),e._v(" "),s("p",[e._v("self."),s("strong",[e._v("class")]),e._v(".__pool这个就是数据库连接池对象；")]),e._v(" "),s("p",[e._v("def get_conn(self)这个方法就是从数据库连接池中获取一个连接对象，有了这个连接对象就可以连上mysql数据库，从而对数据库进行操作。")]),e._v(" "),s("p",[e._v("def selectOne(sql, cursor)这个方法就是按照给定的sql语句从数据库表中查出一条记录。")]),e._v(" "),s("p",[e._v("def selectAll(sql, cursor)这个方法是按照给定的sql语句从数据库表中查出所有满足条件的记录。")]),e._v(" "),s("p",[e._v("def execute(self, sql, cursor)这个方法是执行一条sql语句。")]),e._v(" "),s("p",[e._v("def executemany(self, sql, cursor,data)这个方法是执行多条sql语句。")]),e._v(" "),s("p",[e._v("def commit(conn)此方法是提交数据库事务的方法。")]),e._v(" "),s("p",[e._v("def close(conn, cursor)此方法是关闭数据库相关资源的方法。")]),e._v(" "),s("p",[e._v("def rollback(conn)此方法是回滚数据库事务的方法。")]),e._v(" "),s("p",[e._v("class MyMainWindow(QTabWidget)这个类是主程序界面类。在该类的初始化方法中，首先初始化数据库连接池，代码如下：")]),e._v(" "),s("p",[e._v("def "),s("strong",[e._v("init")]),e._v("(self,mysqlClient):")]),e._v(" "),s("p",[e._v("super()."),s("strong",[e._v("init")]),e._v("()")]),e._v(" "),s("h1",{attrs:{id:"创建连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建连接"}},[e._v("#")]),e._v(" 创建连接")]),e._v(" "),s("p",[e._v("self.mysqlClient=mysqlClient")]),e._v(" "),s("p",[e._v("紧接着调用了主程序界面UI初始化方法：\nself.initUI()")]),e._v(" "),s("p",[e._v("在  self.initUI()方法中，初始化了子菜单，代码如下：")]),e._v(" "),s("p",[e._v("app_widget_DormitoryElectric =\nAppWidget_DormitoryElectric(self.mysqlClient)（初始化学生寝室用电管理子菜单）")]),e._v(" "),s("p",[e._v("app_widget_JiaoFei=AppWidget_JiaoFei(self.mysqlClient)（初始化充值缴费子菜单）")]),e._v(" "),s("p",[e._v("app_widget_Profile=AppWidget_Profile(self.mysqlClient)（初始化个人资料子菜单）")]),e._v(" "),s("p",[e._v("app_widget3 =\nAppWidget_User(self.mysqlClient)（初始化学生档案信息管理子菜单）")]),e._v(" "),s("p",[e._v("app_widget3_Account = AppWidget_Account(self.mysqlClient)（初始化用户账户管理子菜单）")]),e._v(" "),s("p",[e._v("根据用户账号的角色是否是管理员来控制菜单权限，代码如下：")]),e._v(" "),s("p",[e._v("if SI.data['role']==\"管理员\":")]),e._v(" "),s("p",[e._v('self.addTab(app_widget3, "学生档案信息管理")')]),e._v(" "),s("p",[e._v('self.addTab(app_widget_DormitoryElectric, "学生寝室用电管理")')]),e._v(" "),s("p",[e._v('self.addTab(app_widget3_Account, "用户账户管理")')]),e._v(" "),s("p",[e._v('self.addTab(app_widget_JiaoFei,"充值缴费")')]),e._v(" "),s("p",[e._v('self.addTab(app_widget_Profile,"个人资料")')]),e._v(" "),s("p",[e._v('self.addTab(self.btn_find,"退出登录")')]),e._v(" "),s("p",[e._v("else:")]),e._v(" "),s("p",[e._v('self.addTab(app_widget_JiaoFei,"充值缴费")')]),e._v(" "),s("p",[e._v('self.addTab(app_widget_Profile,"个人资料")')]),e._v(" "),s("p",[e._v('self.addTab(self.btn_find,"退出登录")')]),e._v(" "),s("p",[e._v("5、  各子菜单增删改查功能设计实现")]),e._v(" "),s("p",[e._v("这里我以学生档案信息管理功能举例说明，其他子菜单的实现都是如此，就不每个子菜单重复说明了。")]),e._v(" "),s("p",[e._v("首先定义学生信息的实体模型，定义了数据库表studentinfo，该表包含有学生相关信息。表结构如下：")]),e._v(" "),s("p",[e._v("CREATE TABLE "),s("code",[e._v("studentinfo")]),e._v("  (")]),e._v(" "),s("p",[s("code",[e._v("id")]),e._v(" bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id',")]),e._v(" "),s("p",[s("code",[e._v("student_name")]),e._v(" varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci\nNULL DEFAULT '' COMMENT '学生姓名',")]),e._v(" "),s("p",[s("code",[e._v("student_number")]),e._v(" varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci\nNULL DEFAULT '' COMMENT '学号',")]),e._v(" "),s("p",[s("code",[e._v("dormitory_number")]),e._v(" varchar(20) CHARACTER SET utf8 COLLATE\nutf8_general_ci NOT NULL COMMENT '宿舍编号',")]),e._v(" "),s("p",[s("code",[e._v("department_name")]),e._v(" varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci\nNULL DEFAULT '' COMMENT '系名',")]),e._v(" "),s("p",[s("code",[e._v("sex")]),e._v(" varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL\nDEFAULT NULL COMMENT '性别',")]),e._v(" "),s("p",[e._v("PRIMARY KEY ("),s("code",[e._v("id")]),e._v(") USING BTREE")]),e._v(" "),s("p",[e._v(") ENGINE = InnoDB AUTO_INCREMENT = 8\nCHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '学生档案信息表' ROW_FORMAT = Dynamic;")]),e._v(" "),s("p",[e._v("使用mysql数据库，并在数据库中执行建表语句创建学生信息表studentinfo。")]),e._v(" "),s("p",[e._v("account.py文件里面定义了学生信息管理实现类class AppWidget_Account(QWidget)")]),e._v(" "),s("p",[e._v("在该类的初始化方法def init_ui(self)里初始化了UI界面。")]),e._v(" "),s("p",[e._v("self.init_load_all_infos()方法是初始化学生信息管理表格里的数据。")]),e._v(" "),s("p",[e._v("def save_change_info(self):方法是点击编辑时，界面回显点击行的数据。")]),e._v(" "),s("p",[e._v("def addUser(self):此方法是添加学生信息的方法；")]),e._v(" "),s("p",[e._v("def search(self):此方法是搜索学生信息的方法；")]),e._v(" "),s("p",[e._v("def delete(self):此方法是删除学生信息的方法；")]),e._v(" "),s("p",[e._v("def updaterow(self):此方法是更新学生信息的方法；")]),e._v(" "),s("p",[e._v("def load_all_infos(self):此方法是每次更新、增加、删除后，重新从数据库里加载最新数据到表格里的方法。")]),e._v(" "),s("p",[e._v("6、  学生寝室用电账单和缴费功能设计实现")]),e._v(" "),s("p",[e._v("class\nAppWidget_DormitoryElectric(QWidget):这个类是学生寝室用电管理的实现类。这个类的def\naddUser(self):方法就是给学生寝室新增账单的方法。具体的sql语句如下：")]),e._v(" "),s("p",[e._v('sql="insert\ninto dormitory\n(dormitory_number,student_name,student_number,payment_status,last_payment_time,light_power_balance,aircondition_power_balance)\nvalues(%s, %s, %s, %s, %s, %s, %s)"')]),e._v(" "),s("p",[e._v("这句sql就是往dormitory这张表里插入一条账单记录。")]),e._v(" "),s("p",[e._v("jiaofei.py这个文件里定义了账单缴费的实现类class AppWidget_JiaoFei(QWidget)。")]),e._v(" "),s("p",[e._v("在class AppWidget_JiaoFei(QWidget)的def\ndojiaofei(self):方法中实现了具体缴费的逻辑。具体实现说明：")]),e._v(" "),s("p",[e._v("首先判断用户选择的是照明用电缴费还是空调用电缴费，然后是拼接sql语句，先拼接账单状态的更新语句，如果缴费金额加上余额后的和大于0，则更新账单状态为已缴费，否则为待缴费，代码如下：")]),e._v(" "),s("p",[e._v("light_power_balance=light_power_balance+Decimal(jiaofeijine)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('if light_power_balance<=0 :\n\nsql+="\n')])])]),s("p",[e._v("payment_status='待缴费', \"")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('else:\n\nsql+="\n')])])]),s("p",[e._v("payment_status='已缴费', \"")]),e._v(" "),s("p",[e._v("aircondition_power_balance=aircondition_power_balance+Decimal(jiaofeijine)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("if\n")])])]),s("p",[e._v("aircondition_power_balance<=0 :")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('sql+="\n')])])]),s("p",[e._v("payment_status='待缴费', \"")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('else:\n\nsql+="\n')])])]),s("p",[e._v("payment_status='已缴费', \"")]),e._v(" "),s("p",[e._v("最后再拼接最近缴费时间的sql语句，代码如下：")]),e._v(" "),s("p",[e._v('t1=datetime.datetime.now().strftime("%Y-%m-%d\n%H:%M:%S")')]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('sql+="  ,last_payment_time={} WHERE\n')])])]),s("p",[e._v('dormitory_number={}".format("\'"+t1+"\'",sushehao)')]),e._v(" "),s("p",[e._v("缴费的更新sql语句拼接好以后，就发送给mysql数据库执行，这样就实现了缴费功能，更新了账单信息。代码如下：")]),e._v(" "),s("p",[e._v("try:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("conn, cursor =\n")])])]),s("p",[e._v("self.mysqlClient.get_conn()")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("# 查询所有数据,返回数据为元组格式\n\nresult =\n")])])]),s("p",[e._v("self.mysqlClient.execute(sql,cursor)")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("if result is not None:\n\nQMessageBox.information(self, '提示', s+'成功！')\n\nexcept Exception as e:\n\nprint(f\"执行事务异常：{e}\")\n\nself.mysqlClient.rollback(conn=conn)\n\nfinally:\n\nself.mysqlClient.commit(conn=conn)\n\nself.updateYue(sushehao)\n\nself.mysqlClient.close(conn=conn,\n")])])]),s("p",[e._v("cursor=cursor)")])])}),[],!1,null,null,null);_.default=n.exports}}]);