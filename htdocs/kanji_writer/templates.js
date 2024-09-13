angular.module('templates-main', ['views/about/main.html', 'views/change-password/main.html', 'views/change-password/right.html', 'views/chat/main.html', 'views/help/main.html', 'views/jlpt/main.html', 'views/jlpt/right.html', 'views/login/main.html', 'views/login/right.html', 'views/news/main.html', 'views/news/right.html', 'views/news/right2.html', 'views/note/main.html', 'views/note/right.html', 'views/profile/main.html', 'views/profile/right.html', 'views/register/main.html', 'views/register/right.html', 'views/reset-password/main.html', 'views/reset-password/right.html', 'views/search/main.html', 'views/search/right.html', 'views/sentence/main.html', 'views/sentence/right.html', 'views/term/main.html', 'views/write/main.html', 'views/write/right.html', 'components/affilate/affilate-template.html', 'components/check-category/check-category.html', 'components/check-category/feedback-category-modal.html', 'components/emailhole/emailhole-template.html', 'components/example/example-template.html', 'components/feedback/feedback-template.html', 'components/flashcard/flashcard-template.html', 'components/footer/footer-template.html', 'components/google-translate/google-translate-template.html', 'components/grammar/grammar-template.html', 'components/history/history-template.html', 'components/kanji-draw/kanji-draw-template.html', 'components/kanji-recognize/kanji-recognize-template.html', 'components/kanji-result-search-word/kanji-result-search-word-template.html', 'components/kanji/kanji-template.html', 'components/mazii-qa/mazii-qa-directive.html', 'components/newreport/newreport-template.html', 'components/news/newsother-template.html', 'components/notes/category-template.html', 'components/notes/note-content-template.html', 'components/notes/note-template.html', 'components/notify/notify-template.html', 'components/report/report-template.html', 'components/review/review-template.html', 'components/setting/setting-template.html', 'components/survay/survay-template.html', 'components/synonyms/synonyms-template.html', 'components/verb-conjugtion/verb-conjugtion-template.html', 'components/word-ja/word-ja.html', 'components/word/word-template.html']);

angular.module("views/about/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/about/main.html",
    "<div class=\"widget-container about-screen\">\n" +
    "    <h2>Giới thiệu về Mazii</h2>\n" +
    "\n" +
    "    <p class=\"about-head\">Mazii là gì?</p>\n" +
    "    Mazii là từ điển tiếng Nhật dành cho người Việt Nam. Cho phép mọi người tra cứu từ điển Nhật Việt, Việt Nhật, từ điển Hán tự và tra cứu ngữ pháp tiếng Nhật một cách chính xác.<br>\n" +
    "    <p>Hiện nay kho dữ liệu của Mazii đang ngày càng hoàn thiện với</p>\n" +
    "    <ul>\n" +
    "        <li>Từ điển Nhật - Việt: 250.000 từ</li>\n" +
    "        <li>Từ điển Việt - Nhật: 100.000 từ</li>\n" +
    "        <li>Từ điển Kanji: 11.000 từ</li>\n" +
    "        <li>Từ điển ngữ pháp: 600 mẫu</li>\n" +
    "        <li>Từ điển mẫu câu: 75.000 mẫu</li>\n" +
    "    </ul>\n" +
    "    <p class=\"about-head\">Sứ mệnh của Mazii</p>\n" +
    "    Cung cấp các công cụ hỗ trợ học tiếng Nhật tốt nhất cho người Việt Nam.\n" +
    "\n" +
    "    <p class=\"about-head\">Liên hệ</p>\n" +
    "    Mazii luôn nỗ lực để có thể đem lại những gì tốt nhất cho người dùng, vì vậy sẽ rất vui khi nhận được những ý kiến phản hồi của các bạn. Nếu có bất kỳ ý kiến đóng góp hoặc thắc mắc, mời bạn liên lạc với chúng tôi qua:\n" +
    "    <p>Email:\n" +
    "        <a href=\"mailto:support@mazii.net\">support@mazii.net</a>\n" +
    "    </p>\n" +
    "    <br>\n" +
    "</div>");
}]);

angular.module("views/change-password/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/change-password/main.html",
    "<div class=\"login-screen col-md-8 col-md-offset-2 col-xs-12\">\n" +
    "\n" +
    "    <form name=\"changepasswordForm\" ng-if=\"user != null && !changePasswordSucess\">\n" +
    "        <legend>Đổi mật khẩu người dùng</legend>\n" +
    "        \n" +
    "        <label class=\"control-label\">\n" +
    "            Mật khẩu cũ:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"changepasswordForm.passwordOld.$dirty && changepasswordForm.passwordOld.$valid && checkChar(passwordOld) \"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"password\" name=\"passwordOld\" class=\"form-control\" placeholder=\"Password\" ng-model=\"passwordOld\" \n" +
    "            ng-minlength=\"6\" required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "            <div ng-show=\"changepasswordForm.passwordOld.$dirty && changepasswordForm.passwordOld.$invalid\" class=\"text-danger\">\n" +
    "                <span ng-show=\"changepasswordForm.passwordOld.$error.minlength\">\n" +
    "                   <i class=\"fa fa-times text-danger\"></i> Mật khẩu phải dài tối thiểu 6 kí tự\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(passwordOld)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong password\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "         </br>\n" +
    "        <label class=\"control-label\">\n" +
    "            Mật khẩu mới:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"changepasswordForm.passwordNew.$dirty && changepasswordForm.passwordNew.$valid && checkChar(passwordNew) \"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"password\" name=\"passwordNew\" class=\"form-control\" placeholder=\"Password\" ng-model=\"passwordNew\" \n" +
    "            ng-minlength=\"6\" required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "            <div ng-show=\"changepasswordForm.passwordNew.$dirty && changepasswordForm.passwordNew.$invalid\" class=\"text-danger\">\n" +
    "                <span ng-show=\"changepasswordForm.passwordNew.$error.minlength\">\n" +
    "                   <i class=\"fa fa-times text-danger\"></i> Mật khẩu phải dài tối thiểu 6 kí tự\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(passwordNew)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong password\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        </br>\n" +
    "        <label class=\"control-label\">\n" +
    "            Nhập lại mật khẩu mới:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"changepasswordForm.passwordConfirm.$dirty && changepasswordForm.passwordConfirm.$valid && checkChar(passwordConfirm) && isPasswordEqual(passwordNew,passwordConfirm)\"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"password\" name=\"passwordConfirm\" class=\"form-control\" placeholder=\"Password\" ng-model=\"passwordConfirm\"  required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "            <div ng-if=\"!isPasswordEqual(passwordNew,passwordConfirm)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-exclamation-triangle\" style=\"color:#CC3333;\"></i> Mật khẩu không khớp !\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(passwordConfirm)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong password\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"isChangePassword\">\n" +
    "                <span style=\"color:#CC3333; text-align: center;\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Mật khẩu cũ không tồn tại \n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        </br>\n" +
    "        <button class=\"btn btn-danger btn-change-password\" ng-disabled=\"!changepasswordForm.$valid || !checkChar(passwordOld) || \n" +
    "        !checkChar(passwordNew) || !checkChar(passwordConfirm) || !isPasswordEqual(passwordNew,passwordConfirm)\"\n" +
    "        ng-click=\"changePassword(passwordOld, passwordNew, passwordConfirm)\">\n" +
    "            Đổi mật khẩu\n" +
    "        </button>\n" +
    "\n" +
    "    </form>\n" +
    "\n" +
    "    <div class=\"alert alert-danger error-alert\" ng-if=\"user == null\">\n" +
    "        Bạn chưa đăng nhập. Hãy đăng nhập trước <br>\n" +
    "        <a href=\"#login\" class=\"btn btn-link\">Đăng nhập</a>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"change-password-success\" ng-if=\"changePasswordSucess\">\n" +
    "        Bạn đã thay đổi mật khẩu thành công\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("views/change-password/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/change-password/right.html",
    "");
}]);

angular.module("views/chat/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/chat/main.html",
    "<div class=\"main-chat widget-container col-md-12\" ng-if=\"loadDone\">\n" +
    "	<div class=\"col-md-4\">\n" +
    "		<ul class=\"menu-tab\">\n" +
    "			<li ng-click=\"changeTab(1)\" ng-class=\"tab_1\">\n" +
    "				<p>Chat nhóm</p>\n" +
    "			</li>\n" +
    "			<li ng-click=\"changeTab(2)\" ng-class=\"tab_2\">\n" +
    "				<p>Chat riêng \n" +
    "					<span class=\"new-message\" ng-if=\"newMessage\">N</span>\n" +
    "				</p>\n" +
    "			</li>\n" +
    "			<li ng-click=\"changeTab(3)\" ng-class=\"tab_3\">\n" +
    "				<p>Danh sách</p>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "\n" +
    "		<div class=\"content\">\n" +
    "			<div class=\"box-chat\">\n" +
    "				<div class=\"chat-public\" ng-if=\"tabActive == 1\">\n" +
    "					<div class=\"list-message\">\n" +
    "						<ul class=\"list-group\">\n" +
    "							<li class=\"list-group-item group-0 group-jlpt-active\" \n" +
    "							ng-click=\"changeScreen(0)\">\n" +
    "								Nhóm chung\n" +
    "							</li>\n" +
    "							<li class=\"list-group-item group-5\" ng-click=\"changeScreen(5)\">\n" +
    "								JLPT N5\n" +
    "							</li>\n" +
    "							<li class=\"list-group-item group-4\" ng-click=\"changeScreen(4)\">\n" +
    "								JLPT N4\n" +
    "							</li>\n" +
    "							<li class=\"list-group-item group-3\" ng-click=\"changeScreen(3)\">\n" +
    "								JLPT N3\n" +
    "							</li>\n" +
    "							<li class=\"list-group-item group-2\" ng-click=\"changeScreen(2)\">\n" +
    "								JLPT N2\n" +
    "							</li>\n" +
    "							<li class=\"list-group-item group-1\" ng-click=\"changeScreen(1)\">\n" +
    "								JLPT N1\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"chat-list-private\" ng-if=\"tabActive == 2\">\n" +
    "					<ul class=\"list-message-receive\">\n" +
    "						<li class=\"list-group-item message-receive \n" +
    "						message-private-{{message.status}}\" \n" +
    "						ng-repeat=\"message in listmessageReceive track by $index | orderBy:'status'\"\n" +
    "						ng-click=\"redirectChatPrivatetoListMessage(message)\">\n" +
    "							<div class=\"avatar\">\n" +
    "								{{ message.your_username.slice(0, 1).toUpperCase() }}\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"detail\">\n" +
    "								<p class=\"username\">{{ message.your_username }}</p>\n" +
    "								<p class=\"content\">{{ message.message }}</p>\n" +
    "								<div class=\"date\">\n" +
    "									{{ message.date }}\n" +
    "								</div>\n" +
    "							</div>\n" +
    "\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "				<div class=\"chat-list-user\" ng-if=\"tabActive == 3\">\n" +
    "					<ul class=\"list-group list-user\">\n" +
    "						<li class=\"list-group-item\" ng-repeat=\"user in listUser\"\n" +
    "						ng-click=\"redirectChatPrivate(user)\">\n" +
    "							{{ user.username }}\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"col-md-8 screen-chat\">\n" +
    "		<div class=\"bar\">	\n" +
    "			{{ titleBar }}\n" +
    "			<div class=\"btn-group username\" ng-if=\"user != null\">\n" +
    "			  	<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "			    	<span>{{ user.username }}</span> \n" +
    "					<span class=\"fa fa-cog\"></span>\n" +
    "			  	</button>\n" +
    "			  	<ul class=\"dropdown-menu\">\n" +
    "			    	<li>\n" +
    "			    		<a ng-click=\"logoutFacebook()\">Đăng xuất</a>\n" +
    "			    	</li>\n" +
    "			  	</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"login-form col-md-8 col-md-offset-2\" ng-if=\"showLogin\">\n" +
    "			<p>Chat và dịch nhanh cùng bạn bè</p>\n" +
    "			<div class=\"login-facebook\">\n" +
    "				<img src=\"imgs/facebook.png\" height=\"50px\" ng-click=\"loginFacebook()\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "		<div class=\"chat-public\" ng-if=\"!showLogin && tabScreen == 0\">\n" +
    "			<div class=\"list-message\" id=\"list-message-0\">\n" +
    "				<div class=\"message-public\" ng-if=\"message.index == 0\" \n" +
    "				ng-repeat=\"message in listMessage\"> \n" +
    "					<div class=\"avatar\" ng-click=\"showDetailUser(message._id)\">\n" +
    "						{{ message.username.slice(0, 1).toUpperCase() }}\n" +
    "						<div class=\"detail-user detail-user-{{message._id}}\">\n" +
    "							<p ng-click=\"redirectChatPrivatetoDetailUser(message)\">\n" +
    "								{{ message.username }}\n" +
    "							</p>\n" +
    "							<p><i class=\"fa fa-clock-o\"></i> {{ message.date_send }}</p>\n" +
    "						</div>\n" +
    "					</div> \n" +
    "					<div class=\"text text-{{message._id}}\">\n" +
    "						<span ng-if=\"!message.newLine\">{{ message.message }}</span>\n" +
    "						<span ng-if=\"message.newLine\">\n" +
    "							<p ng-repeat=\"line in message.message\">\n" +
    "								{{line}}\n" +
    "							</p>\n" +
    "						</span>\n" +
    "						<button class=\"translate\" \n" +
    "						ng-click=\"translateMessage(message.message, message._id)\">\n" +
    "							dịch\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"enter-message\">\n" +
    "				<div class=\"input-group\">\n" +
    "			      <textarea class=\"form-control\" placeholder=\"Nhập tin nhắn\" rows=\"3\" \n" +
    "			      id =\"enter-chat-message-0\" ng-keypress=\"formChat.enterChat($event, 0)\"></textarea>\n" +
    "			      <div class=\"input-group-addon\" ng-click=\"formChat.sendChat(0)\">\n" +
    "			      	<span class=\"fa fa-paper-plane\"></span>\n" +
    "			      </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"chat-public\" ng-if=\"!showLogin && tabScreen == 1\">\n" +
    "			<div class=\"list-message\" id=\"list-message-1\">\n" +
    "				<div class=\"message-public\" ng-if=\"message.index == 1\" \n" +
    "				ng-repeat=\"message in listMessage\"> \n" +
    "					<div class=\"avatar\" ng-click=\"showDetailUser(message._id)\">\n" +
    "						{{ message.username.slice(0, 1).toUpperCase() }}\n" +
    "						<div class=\"detail-user detail-user-{{message._id}}\">\n" +
    "							<p class=\"username\">{{ message.username }}</p>\n" +
    "							<p><i class=\"fa fa-clock-o\"></i> {{ message.date_send }}</p>\n" +
    "						</div>\n" +
    "					</div> \n" +
    "					<div class=\"text text-{{message._id}}\">\n" +
    "						<span ng-if=\"!message.newLine\">{{ message.message }}</span>\n" +
    "						<span ng-if=\"message.newLine\">\n" +
    "							<p ng-repeat=\"line in message.message\">\n" +
    "								{{line}}\n" +
    "							</p>\n" +
    "						</span>\n" +
    "						<button class=\"translate\" \n" +
    "						ng-click=\"translateMessage(message.message, message._id)\">\n" +
    "							dịch\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"enter-message\">\n" +
    "				<div class=\"input-group\">\n" +
    "			      <textarea class=\"form-control\" placeholder=\"Nhập tin nhắn\" rows=\"3\" \n" +
    "			      id =\"enter-chat-message-1\" ng-keypress=\"formChat.enterChat($event, 1)\"></textarea>\n" +
    "			      <div class=\"input-group-addon\" ng-click=\"formChat.sendChat(1)\">\n" +
    "			      	<span class=\"fa fa-paper-plane\"></span>\n" +
    "			      </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"chat-public\" ng-if=\"!showLogin && tabScreen == 2\">\n" +
    "			<div class=\"list-message\" id=\"list-message-2\">\n" +
    "				<div class=\"message-public\" ng-if=\"message.index == 2\" \n" +
    "				ng-repeat=\"message in listMessage\"> \n" +
    "					<div class=\"avatar\" ng-click=\"showDetailUser(message._id)\">\n" +
    "						{{ message.username.slice(0, 1).toUpperCase() }}\n" +
    "						<div class=\"detail-user detail-user-{{message._id}}\">\n" +
    "							<p class=\"username\">{{ message.username }}</p>\n" +
    "							<p><i class=\"fa fa-clock-o\"></i> {{ message.date_send }}</p>\n" +
    "						</div>\n" +
    "					</div> \n" +
    "					<div class=\"text text-{{message._id}}\">\n" +
    "						<span ng-if=\"!message.newLine\">{{ message.message }}</span>\n" +
    "						<span ng-if=\"message.newLine\">\n" +
    "							<p ng-repeat=\"line in message.message\">\n" +
    "								{{line}}\n" +
    "							</p>\n" +
    "						</span>\n" +
    "						<button class=\"translate\" \n" +
    "						ng-click=\"translateMessage(message.message, message._id)\">\n" +
    "							dịch\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"enter-message\">\n" +
    "				<div class=\"input-group\">\n" +
    "			      <textarea class=\"form-control\" placeholder=\"Nhập tin nhắn\" rows=\"3\" \n" +
    "			      id =\"enter-chat-message-2\" ng-keypress=\"formChat.enterChat($event, 2)\"></textarea>\n" +
    "			      <div class=\"input-group-addon\" ng-click=\"formChat.sendChat(2)\">\n" +
    "			      	<span class=\"fa fa-paper-plane\"></span>\n" +
    "			      </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"chat-public\" ng-if=\"!showLogin && tabScreen == 3\">\n" +
    "			<div class=\"list-message\" id=\"list-message-3\">\n" +
    "				<div class=\"message-public\" ng-if=\"message.index == 3\" \n" +
    "				ng-repeat=\"message in listMessage\"> \n" +
    "					<div class=\"avatar\" ng-click=\"showDetailUser(message._id)\">\n" +
    "						{{ message.username.slice(0, 1).toUpperCase() }}\n" +
    "						<div class=\"detail-user detail-user-{{message._id}}\">\n" +
    "							<p class=\"username\">{{ message.username }}</p>\n" +
    "							<p><i class=\"fa fa-clock-o\"></i> {{ message.date_send }}</p>\n" +
    "						</div>\n" +
    "					</div> \n" +
    "					<div class=\"text text-{{message._id}}\">\n" +
    "						<span ng-if=\"!message.newLine\">{{ message.message }}</span>\n" +
    "						<span ng-if=\"message.newLine\">\n" +
    "							<p ng-repeat=\"line in message.message\">\n" +
    "								{{line}}\n" +
    "							</p>\n" +
    "						</span>\n" +
    "						<button class=\"translate\" \n" +
    "						ng-click=\"translateMessage(message.message, message._id)\">\n" +
    "							dịch\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"enter-message\">\n" +
    "				<div class=\"input-group\">\n" +
    "			      <textarea class=\"form-control\" placeholder=\"Nhập tin nhắn\" rows=\"3\" \n" +
    "			      id =\"enter-chat-message-3\" ng-keypress=\"formChat.enterChat($event, 3)\"></textarea>\n" +
    "			      <div class=\"input-group-addon\" ng-click=\"formChat.sendChat(3)\">\n" +
    "			      	<span class=\"fa fa-paper-plane\"></span>\n" +
    "			      </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"chat-public\" ng-if=\"!showLogin && tabScreen == 4\">\n" +
    "			<div class=\"list-message\" id=\"list-message-4\">\n" +
    "				<div class=\"message-public\" ng-if=\"message.index == 4\" \n" +
    "				ng-repeat=\"message in listMessage\"> \n" +
    "					<div class=\"avatar\" ng-click=\"showDetailUser(message._id)\">\n" +
    "						{{ message.username.slice(0, 1).toUpperCase() }}\n" +
    "						<div class=\"detail-user detail-user-{{message._id}}\">\n" +
    "							<p class=\"username\">{{ message.username }}</p>\n" +
    "							<p><i class=\"fa fa-clock-o\"></i> {{ message.date_send }}</p>\n" +
    "						</div>\n" +
    "					</div> \n" +
    "					<div class=\"text text-{{message._id}}\">\n" +
    "						<span ng-if=\"!message.newLine\">{{ message.message }}</span>\n" +
    "						<span ng-if=\"message.newLine\">\n" +
    "							<p ng-repeat=\"line in message.message\">\n" +
    "								{{line}}\n" +
    "							</p>\n" +
    "						</span>\n" +
    "						<button class=\"translate\" \n" +
    "						ng-click=\"translateMessage(message.message, message._id)\">\n" +
    "							dịch\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"enter-message\">\n" +
    "				<div class=\"input-group\">\n" +
    "			      <textarea class=\"form-control\" placeholder=\"Nhập tin nhắn\" rows=\"3\" \n" +
    "			      id =\"enter-chat-message-4\" ng-keypress=\"formChat.enterChat($event, 4)\"></textarea>\n" +
    "			      <div class=\"input-group-addon\" ng-click=\"formChat.sendChat(4)\">\n" +
    "			      	<span class=\"fa fa-paper-plane\"></span>\n" +
    "			      </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"chat-public\" ng-if=\"!showLogin && tabScreen == 5\">\n" +
    "			<div class=\"list-message\" id=\"list-message-5\">\n" +
    "				<div class=\"message-public\" ng-if=\"message.index == 5\" \n" +
    "				ng-repeat=\"message in listMessage\"> \n" +
    "					<div class=\"avatar\" ng-click=\"showDetailUser(message._id)\">\n" +
    "						{{ message.username.slice(0, 1).toUpperCase() }}\n" +
    "						<div class=\"detail-user detail-user-{{message._id}}\">\n" +
    "							<p class=\"username\">{{ message.username }}</p>\n" +
    "							<p><i class=\"fa fa-clock-o\"></i> {{ message.date_send }}</p>\n" +
    "						</div>\n" +
    "					</div> \n" +
    "					<div class=\"text text-{{message._id}}\">\n" +
    "						<span ng-if=\"!message.newLine\">{{ message.message }}</span>\n" +
    "						<span ng-if=\"message.newLine\">\n" +
    "							<p ng-repeat=\"line in message.message\">\n" +
    "								{{line}}\n" +
    "							</p>\n" +
    "						</span>\n" +
    "						<button class=\"translate\" \n" +
    "						ng-click=\"translateMessage(message.message, message._id)\">\n" +
    "							dịch\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"enter-message\">\n" +
    "				<div class=\"input-group\">\n" +
    "			      <textarea class=\"form-control\" placeholder=\"Nhập tin nhắn\" rows=\"3\" \n" +
    "			      id =\"enter-chat-message-5\" ng-keypress=\"formChat.enterChat($event, 5)\"></textarea>\n" +
    "			      <div class=\"input-group-addon\" ng-click=\"formChat.sendChat(5)\">\n" +
    "			      	<span class=\"fa fa-paper-plane\"></span>\n" +
    "			      </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"chat-private\" ng-if=\"!showLogin && tabScreen == 6\">\n" +
    "			<div class=\"list-message list-message-private\"  id=\"list-message-6\">\n" +
    "				<div ng-repeat=\"message in listMessagePrivate\">\n" +
    "					<div class=\"my_message message-private\" ng-if=\"message.flag == 0\">\n" +
    "						<div class=\"avatar\" ng-click=\"showDetailUser(message._id)\">\n" +
    "							{{ message.my_username.slice(0, 1).toUpperCase() }}\n" +
    "							<div class=\"detail-user detail-user-{{message._id}}\">\n" +
    "								<p class=\"username\">{{ message.my_username }}</p>\n" +
    "								<p><i class=\"fa fa-clock-o\"></i> {{ message.date }}</p>\n" +
    "							</div>\n" +
    "						</div> \n" +
    "						<div class=\"text text-{{message._id}}\">\n" +
    "							<span ng-if=\"!message.newLine\">{{ message.message }}</span>\n" +
    "							<span ng-if=\"message.newLine\">\n" +
    "								<p ng-repeat=\"line in message.message\">\n" +
    "									{{line}}\n" +
    "								</p>\n" +
    "							</span>\n" +
    "							<button class=\"translate\" \n" +
    "							ng-click=\"translateMessage(message.message, message._id)\">\n" +
    "								dịch\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"your_message message-private\" ng-if=\"message.flag == 1\">\n" +
    "						<div class=\"avatar\" ng-click=\"showDetailUser(message._id)\">\n" +
    "							{{ message.your_username.slice(0, 1).toUpperCase() }}\n" +
    "							<div class=\"detail-user detail-user-{{message._id}}\">\n" +
    "								<p class=\"username\">{{ message.your_username }}</p>\n" +
    "								<p><i class=\"fa fa-clock-o\"></i> {{ message.date }}</p>\n" +
    "							</div>\n" +
    "						</div> \n" +
    "						<div class=\"text text-{{message._id}}\">\n" +
    "							<span ng-if=\"!message.newLine\">{{ message.message }}</span>\n" +
    "							<span ng-if=\"message.newLine\">\n" +
    "								<p ng-repeat=\"line in message.message\">\n" +
    "									{{line}}\n" +
    "								</p>\n" +
    "							</span>\n" +
    "							<button class=\"translate\" \n" +
    "							ng-click=\"translateMessage(message.message, message._id)\">\n" +
    "								dịch\n" +
    "							</button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"enter-message\">\n" +
    "				<div class=\"input-group\">\n" +
    "			      <textarea class=\"form-control\" placeholder=\"Nhập tin nhắn\" rows=\"3\" \n" +
    "			      id =\"enter-chat-message-6\" ng-keypress=\"formChat.enterChatPrivate($event)\"></textarea>\n" +
    "			      <div class=\"input-group-addon\" ng-click=\"formChat.sendChatPrivate()\">\n" +
    "			      	<span class=\"fa fa-paper-plane\"></span>\n" +
    "			      </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"chat-list-user\" ng-if=\"!showLogin && tabScreen == 7\">\n" +
    "			<div class=\"information-list-user\">\n" +
    "				<span ng-if=\"listUser.length > 0\">\n" +
    "					<p>Hiện tại đang có {{listUser.length + 1}} người đang online</p>\n" +
    "					<p>Hãy chọn 1 người bạn để trò chuyện nào</p>\n" +
    "				</span>\n" +
    "				<p ng-if=\"listUser.length == 0\">\n" +
    "					Hiện tại có duy nhất bạn đang online\n" +
    "				</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("views/help/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/help/main.html",
    "<div class=\"widget-container help-screen\">\n" +
    "  <h3>Bạn muốn đặt câu hỏi? Bấm <a href=\"#\" id=\"forward-to-chat\">đây</a>.</h3>\n" +
    "\n" +
    "  <h3>Các câu hỏi thường gặp</h3>\n" +
    "\n" +
    "<p class=\"about-head\">Không gõ được tiếng Nhật</p>\n" +
    "Không gõ được tiếng Nhật có thể là do bạn chưa cài đặt bàn phím tiếng Nhật. \n" +
    "    Bạn vui lòng cài đặt bàn phím tiếng Nhật theo hướng dẫn tại <a href=\"http://www.saromalang.com/2012/10/ban-phim-tieng-nhat-va-go-tieng-nhat.html\">đây</a>.\n" +
    "\n" +
    "<p class=\"about-head\">Không tra được từ, không vẽ được chữ kanji...</p>\n" +
    "    Khi website thực hiện nâng cấp, có thể xảy ra tính trạng website hoạt động không đúng. Như là không tra được từ, không vẽ được kanji... Khi đó các bạn vui lòng refresh lại website bằng cách nhấn vào biểu tượng refresh của trình duyệt để website tải lại. Nếu tình trạng lỗi vẫn tiếp tục diễn ra, Mazii rất mong nhận được thông báo của các bạn. \n" +
    "    \n" +
    "<p class=\"about-head\">Không tra được tiếng Việt không dấu</p>\n" +
    "    Mặc định Mazii sẽ tự động nhận diện chữ bạn nhập vào là tiếng Việt hay tiếng Nhật để thực hiện tìm kiếm cho phù hợp, tuy nhiên có những từ tiếng Việt không dấu và chữ romanji tiếng Nhật giống nhau, vì vậy để tra tiếng Việt không dấu bạn làm theo cách sau đây:\n" +
    "    <ul>\n" +
    "        <li>1. Nhập chữ vào ô tìm kiếm</li>\n" +
    "        <li>2. Chờ cho hộp gợi ý xuất hiện (sau khoảng 1 giây sau khi bạn nhập xong)</li>\n" +
    "        <li>3. Bấm vào từ được gợi ý đầu tiên (giống hệt với chữ bạn nhập)</li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"widget-container\">\n" +
    "    <div id=\"facebook-chat\">\n" +
    "        <h4>Đóng góp ý kiến giúp Mazii phục vụ bạn tốt hơn :)</h4>\n" +
    "\n" +
    "        <div class=\"fb-comments\" data-href=\"http://mazii.net\" data-numposts=\"5\" data-colorscheme=\"light\"></div>\n" +
    "</div>");
}]);

angular.module("views/jlpt/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/jlpt/main.html",
    "<div class=\"btn-group jlpt-option\">\n" +
    "    <div class=\"btn-group\" id=\"jlpt-type\" value=\"{{ type }}\">\n" +
    "        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "            <span ng-if=\"type == 'kanji'\"> Hán tự</span>\n" +
    "            <span ng-if=\"type == 'grammar'\"> Ngữ pháp</span>\n" +
    "            <span ng-if=\"type == 'word'\"> Từ vựng</span>\n" +
    "            <i class=\"fa fa-caret-down\"></i>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"jlpt-type\">\n" +
    "            <li><a tabindex=\"-1\" value=\"kanji\" ng-click=\"selectType('kanji')\" data-target=\"#\">Hán tự</a>\n" +
    "            </li>\n" +
    "            <li><a tabindex=\"-1\" value=\"grammar\" ng-click=\"selectType('grammar')\" data-target=\"#\">Ngữ pháp</a>\n" +
    "            </li>\n" +
    "            <li><a tabindex=\"-1\" value=\"word\" ng-click=\"selectType('word')\" data-target=\"#\">Từ vựng</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"btn-group\" id=\"jlpt-level\" value=\"{{ level }}\">\n" +
    "        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "            <span>N{{ level }}</span>\n" +
    "            <i class=\"fa fa-caret-down\"></i>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"jlpt-level\">\n" +
    "            <li><a tabindex=\"-1\" value=\"5\" ng-click=\"selectLevel(5)\" data-target=\"#\">N5</a>\n" +
    "            </li>\n" +
    "            <li><a tabindex=\"-1\" value=\"4\" ng-click=\"selectLevel(4)\" data-target=\"#\">N4</a>\n" +
    "            </li>\n" +
    "            <li><a tabindex=\"-1\" value=\"3\" ng-click=\"selectLevel(3)\" data-target=\"#\">N3</a>\n" +
    "            </li>\n" +
    "            <li><a tabindex=\"-1\" value=\"2\" ng-click=\"selectLevel(2)\" data-target=\"#\">N2</a>\n" +
    "            </li>\n" +
    "            <li><a tabindex=\"-1\" value=\"1\" ng-click=\"selectLevel(1)\" data-target=\"#\">N1</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <button type=\"button\" class=\"btn btn-primary btn-query\" ng-click=\"query()\">Xem</button>\n" +
    "</div>\n" +
    "<div class=\"page-selector\" ng-if=\"list != null\">\n" +
    "    <button type=\"button\" class=\"btn pager-btn pager-left\" ng-class=\"getPreState();\" ng-click=\"prePage()\"><i class=\"fa fa-caret-left fa-2x\"></i></button>\n" +
    "    <button type=\"button\" class=\"btn pager-btn pager-right\" ng-class=\"getNextState();\" ng-click=\"nextPage();\"><i class=\"fa fa-caret-right fa-2x\"></i></button>\n" +
    "   <!--  <button type=\"button\" class=\"btn btn-default btn-pratice\" data-target=\"#modalFlashcard\" data-toggle=\"modal\">Luyện tập</button> -->\n" +
    "   <button type=\"button\" class=\"btn btn-default btn-pratice\" ng-click=\"showModalFlashcard()\">Luyện tập</button>\n" +
    "</div>\n" +
    "<!-- <div class=\"notify-login-before widget-container\" ng-if=\"!logined\">\n" +
    "    Bạn cần đăng nhập để sử dụng tính năng này!<br>\n" +
    "    <a class=\"btn btn-link\" href=\"#login\">Đăng nhập</a>\n" +
    "</div> -->\n" +
    "\n" +
    "<div id=\"jlpt-detail\">\n" +
    "    <div id=\"grammar-result-search\" class=\"widget-container table-grammar-list\" ng-if=\"type == 'grammar'  && list != null\">\n" +
    "        <div class=\"grammar-jlpt japanese-char\" ng-repeat=\"item in list track by $index\">\n" +
    "            <a class=\"grammar-link\" ng-click=\"showGrammar(item.id)\"><span class=\"index\">{{ $index + 1 + length }}.</span> <span ng-bind-html=\"getBeautyTitleGrammar(item.value.title)\"></span></a>\n" +
    "            <span class=\"grammar-mean\" ng-bind-html=\"getBeautyDescGrammar(item)\"></span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"kanji-detail-result\" class=\"widget-container table-kanji-list\" ng-if=\"type == 'kanji' && list != null\">\n" +
    "        <div class=\"kanji-jlpt-char\" ng-repeat=\"item in list track by $index\">\n" +
    "            <a class=\"kanji-link japanese-char\" ng-click=\"showKanji(item.value.kanji)\">\n" +
    "                <div class=\"jlpt-kanji-kanji\">{{ item.value.kanji }}</div> \n" +
    "                <div class=\"jlpt-kanji-mean\" ng-if=\"showhanViet\">{{ item.value.mean.split(',')[0] }}</div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "    <div id=\"word-result-search\" class=\"widget-container table-grammar-list\" ng-if=\"type == 'word' && list != null\">\n" +
    "        <div class=\"left\">\n" +
    "            <div class=\"grammar-jlpt\" ng-repeat=\"item in list track by $index\" ng-if=\"$index < 30\">\n" +
    "                <a class=\"grammar-link japanese-char\" ng-click=\"showWord(item.word)\">\n" +
    "                    <span class=\"index\">{{ $index + 1 + length }}.\n" +
    "                    </span> {{ getBeautyTitleGrammar(item.word) }}\n" +
    "                </a>\n" +
    "                「 {{ item.phonetic }} 」\n" +
    "                <span class=\"grammar-mean\"> {{ item.mean }} </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"right\">\n" +
    "            <div class=\"grammar-jlpt japanese-char\" ng-repeat=\"item in list track by $index\" ng-if=\"$index >= 30\">\n" +
    "                <a class=\"grammar-link\" ng-click=\"showWord(item.word)\">\n" +
    "                    <span class=\"index\">{{ $index + 1 + length }}.\n" +
    "                    </span> {{ getBeautyTitleGrammar(item.word) }}\n" +
    "                </a>\n" +
    "                「 {{ item.phonetic }} 」 \n" +
    "                <span class=\"grammar-mean\"> {{ item.mean }} </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"page-selector\" ng-if=\"list != null\">\n" +
    "    <button type=\"button\" class=\"btn pager-btn pager-left\" ng-class=\"getPreState();\" ng-click=\"prePage()\"><i class=\"fa fa-caret-left fa-2x\"></i></button>\n" +
    "    <button type=\"button\" class=\"btn pager-btn pager-right\" ng-class=\"getNextState();\" ng-click=\"nextPage();\"><i class=\"fa fa-caret-right fa-2x\"></i></button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("views/jlpt/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/jlpt/right.html",
    "<ng-mazii-qa></ng-mazii-qa>\n" +
    "<ng-check-category></ng-check-category> \n" +
    "<ng-newreport></ng-newreport>");
}]);

angular.module("views/login/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/login/main.html",
    "<div class=\"login-screen col-md-8 col-md-offset-2 col-xs-12\">\n" +
    "\n" +
    "    <form name=\"loginForm\" ng-if=\"loadDone\">\n" +
    "        <legend>Đăng nhập hệ thống</legend>\n" +
    "        \n" +
    "        <label class=\"control-label\">\n" +
    "            Email:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"loginForm.email.$dirty && loginForm.email.$valid && checkChar(email)\"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" ng-model=\"email\" required>\n" +
    "            <span class=\"input-group-addon\">@</span>\n" +
    "        </div>\n" +
    "        <div ng-show=\"loginForm.email.$dirty && loginForm.email.$invalid\" class=\"text-danger\">\n" +
    "            <span ng-show=\"loginForm.email.$error.required\">\n" +
    "               <i class=\"fa fa-times text-danger\"></i> Bạn chưa nhập địa chỉ email\n" +
    "            </span>\n" +
    "            <span ng-show=\"loginForm.email.$error.email\">\n" +
    "               <i class=\"fa fa-times text-danger\"></i> Không đúng định dạng email\n" +
    "            </span>\n" +
    "         </div>\n" +
    "         <div ng-if=\"!checkChar(email)\">\n" +
    "            <span style=\"color:#CC3333;\">\n" +
    "                <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong email\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        </br>    \n" +
    "\n" +
    "        <label class=\"control-label\">\n" +
    "            Mật khẩu:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"loginForm.password.$dirty && loginForm.password.$valid && \n" +
    "            checkChar(password)\"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"password\" ng-minlength=\"6\" required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "            <div ng-show=\"loginForm.password.$dirty && loginForm.password.$invalid\" class=\"text-danger\">\n" +
    "                <span ng-show=\"loginForm.password.$error.minlength\">\n" +
    "                   <i class=\"fa fa-times text-danger\"></i> Mật khẩu phải dài hơn 6 kí tự\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(password)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong password\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        <div ng-if=\"isLogin\">\n" +
    "            <span style=\"color:#CC3333; text-align: center;\">\n" +
    "                <i class=\"fa fa-times text-danger\"></i> {{ notify }}\n" +
    "            </span>\n" +
    "        </div>\n" +
    "\n" +
    "        </br/>\n" +
    "        <button class=\"btn btn-danger btn-login\" ng-disabled=\"!loginForm.$valid || !checkChar(email) || !checkChar(password)\"\n" +
    "        ng-click=\"login(email, password)\">\n" +
    "            Đăng nhập\n" +
    "        </button>\n" +
    "\n" +
    "        <a class=\"btn btn-link\" href=\"#register\">\n" +
    "            Đăng ký tài khoản mới\n" +
    "        </a><hr>\n" +
    "        \n" +
    "        <a class=\"forget-password\" ng-click=\"resetPassword()\">Quên mật khẩu, lấy lại.</a>\n" +
    "    </form>\n" +
    "    <div class=\"alert alert-danger error-alert\" ng-if=\"logined\">\n" +
    "        Bạn đang đăng nhập. Hãy <a href=\"#logout\">đăng xuất</a> trước để đăng nhập.<br>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/login/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/login/right.html",
    "");
}]);

angular.module("views/news/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/news/main.html",
    "<div class=\"main-news widget-container japanese-char\" id=\"{{currentNews._id}}\">\n" +
    "    <div class=\"main-news-title\">\n" +
    "        <p ng-bind-html=\"currentNews.title\"></p>\n" +
    "    </div>\n" +
    "    <div class=\"main-news-time\">{{ currentNews.pubDate }}</div>\n" +
    "\n" +
    "    <div id=\"main-news-picture-div\" ng-if=\"currentNews.content.image != '' && currentNews.content.image != null\">\n" +
    "        <img id=\"main-news-picture\" class=\"movie-news-sm movie-news-md\" src=\"{{ checkLink(currentNews.content.image); }}\" ng-if=\"!showVideo\">\n" +
    "        <div class=\"movie-play-btn\" ng-if=\"videoAvailable() && !showVideo\">\n" +
    "            <img src=\"imgs/play.png\" ng-click=\"playVideo()\"></img>\n" +
    "        </div>\n" +
    "        </img>\n" +
    "        <div id=\"news_image_div3\" ng-if=\"showVideo && !isMobile()\" ng-bind-html=\"getVideo()\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"main-news-body\">\n" +
    "        <p ng-bind-html=\"currentNews.content.textbody\"></p>\n" +
    "    </div>\n" +
    "    <div class=\"main-news-more\">\n" +
    "        <p ng-bind-html=\"currentNews.content.textmore\"></p>\n" +
    "    </div>\n" +
    "    <div class=\"news-source\">ソース：<a href=\"{{ currentNews.link }}\" target=\"blank\">NHK　ニュース</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"box-search\" ng-click=\"translate()\">\n" +
    "    <img src=\"imgs/search.png\" height=\"30px\">\n" +
    "</div>");
}]);

angular.module("views/news/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/news/right.html",
    "<div class=\"news-block\">\n" +
    "	<ng-newsother></ng-newsother>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/news/right2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/news/right2.html",
    "<ng-mazii-qa></ng-mazii-qa>\n" +
    "<ng-check-category></ng-check-category> \n" +
    "<ng-newreport></ng-newreport>");
}]);

angular.module("views/note/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/note/main.html",
    "<div ng-if=\"logined && loadDone\">\n" +
    "    <div class='note-block col-md-5'>\n" +
    "        <div class=\"widget-container\">\n" +
    "            <div class=\"news-title\">\n" +
    "                <button class='btn btn-default note-add' data-toggle=\"modal\" data-target=\"#myCategory\">\n" +
    "                    <span class=\"fa fa-plus\"></span>\n" +
    "                </button>\n" +
    "                <div class=\" note-edit\">\n" +
    "                    <button class='btn btn-default' ng-click=\"showEdit()\">\n" +
    "                        <span class=\"fa fa-pencil-square-o\"></span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <hr class=\"note-hr-heading\">\n" +
    "            <div class=\"note-item note-item-{{item.categoryId}}\" ng-if=\"category.length != 0\" ng-repeat=\"item in category track by $index\" \n" +
    "            ng-click=\"getNoteItem(item.categoryId)\" ng-class=\"{ 'unseen': activeItem !== item }\">\n" +
    "                <div class=\"note-content\">{{ item.categoryName }}</div>\n" +
    "                <button class=\"category-delete btn btn-default btn-sm\" ng-class=\"getDeleteState()\" ng-click=\"deleteCategory(item.categoryName, item.categoryId)\">\n" +
    "                    <span class=\"fa fa-times\"></span>\n" +
    "                </button>\n" +
    "                <div class=\"note-time\">{{ getTime(item.date) }}</div>\n" +
    "            </div>\n" +
    "            <div class=\"note-item-not\" ng-if=\"category.length == 0\">\n" +
    "                Bạn chưa tạo nhóm.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "    <ng-category></ng-category>\n" +
    "    <ng-note></ng-note>\n" +
    "</div>\n" +
    "<div class=\"notify-login-before widget-container\" ng-if=\"!logined && loadDone\">\n" +
    "    Bạn cần đăng nhập để sử dụng tính năng này!<br>\n" +
    "    <a class=\"btn btn-link\" href=\"#login\">Đăng nhập</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/note/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/note/right.html",
    "<ng-mazii-qa></ng-mazii-qa>\n" +
    "<ng-newreport></ng-newreport>\n" +
    "<ng-check-category></ng-check-category> ");
}]);

angular.module("views/profile/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/profile/main.html",
    "<div class=\"profile-screen widget-container\">\n" +
    "	\n" +
    "	<div ng-if=\"user != null\">\n" +
    "		<form name=\"profileForm\">			\n" +
    "				\n" +
    "			<label>Tên người dùng:</label>\n" +
    "\n" +
    "		    <div class=\"form-group\">\n" +
    "			    <div class=\"input-group\">\n" +
    "			      <input type=\"text\" class=\"form-control\" placeholder=\"Tên người dùng\" \n" +
    "			      ng-disabled=\"updateUsername\" ng-keypress=\"updateUsername($event, username)\"\n" +
    "			      ng-model=\"username\" required>\n" +
    "\n" +
    "			      <div class=\"input-group-addon\" ng-if=\"updateUsername\">\n" +
    "			      	<button class=\"btn btn-primary\" ng-click=\"update()\">Đổi</button>\n" +
    "			      </div>\n" +
    "\n" +
    "			      <div class=\"input-group-addon\" ng-if=\"!updateUsername\">\n" +
    "			      	<button class=\"btn btn-primary\" ng-click=\"saveUsername(username)\" \n" +
    "			      	ng-disabled=\"!profileForm.$valid\">\n" +
    "			      		Lưu\n" +
    "			      	</button>\n" +
    "			      </div>\n" +
    "			    </div>\n" +
    "\n" +
    "			    <span ng-if=\"changeSuccess && showAlert\" class=\"update-success\">\n" +
    "			    	<i class=\"fa fa-check\"></i> Thay đổi tên thành công\n" +
    "			    </span>\n" +
    "\n" +
    "			    <span ng-if=\"!changeSuccess && showAlert\" class=\"update-fails\">\n" +
    "			    	<i class=\"fa fa-exclamation-triangle\"></i> Có lỗi trong quá trình thay đổi tên người dùng\n" +
    "			    </span>\n" +
    "			</div>\n" +
    "\n" +
    "		</form>\n" +
    "\n" +
    "		<hr>\n" +
    "\n" +
    "		<ul>\n" +
    "			<li>\n" +
    "				<a href=\"#change-password\" class=\"btn btn-link\">Đổi mật khẩu</a>\n" +
    "			</li>\n" +
    "			<li>\n" +
    "				<button type=\"button\" class=\"btn btn-link\" ng-click=\"logoutAll()\">\n" +
    "					Đăng xuất trên mọi thiết bị\n" +
    "				</button>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-if=\"user == null\">\n" +
    "		<div class=\"alert alert-info error-alert\">\n" +
    "			Bạn chưa đăng nhập, hãy <a href=\"#login\">đăng nhập</a> trước\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("views/profile/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/profile/right.html",
    "");
}]);

angular.module("views/register/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/register/main.html",
    "<div class=\"col-md-12 register-screen\">\n" +
    "    <form name=\"loginRegister\" ng-if=\"!registerSuccess\">\n" +
    "        <legend>Đăng ký tài khoản mới</legend>\n" +
    "        \n" +
    "        <label class=\"control-label\">\n" +
    "            Email:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"loginRegister.email.$dirty && loginRegister.email.$valid && checkChar(email)\"></i>\n" +
    "        </label>\n" +
    "\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" ng-model=\"email\"  required>\n" +
    "            <span class=\"input-group-addon\">@</span>\n" +
    "        </div>\n" +
    "            \n" +
    "            <div ng-show=\"loginRegister.email.$dirty && loginRegister.email.$invalid\" class=\"text-danger\">\n" +
    "                <span ng-show=\"loginRegister.email.$error.required\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Bạn chưa nhập địa chỉ email\n" +
    "                </span>\n" +
    "                <span ng-show=\"loginRegister.email.$error.email\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không đúng định dạng email\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(email)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong email\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            \n" +
    "        </br>    \n" +
    "        <label class=\"control-label\">\n" +
    "            Mật khẩu:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"loginRegister.password.$dirty && loginRegister.password.$valid && checkChar(password) \"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" \n" +
    "            ng-model=\"password\" ng-minlength=\"6\" required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "            <div ng-show=\"loginRegister.password.$dirty && loginRegister.password.$invalid\" class=\"text-danger\">\n" +
    "                <span ng-show=\"loginRegister.password.$error.minlength\">\n" +
    "                   <i class=\"fa fa-times text-danger\"></i> Mật khẩu phải dài hơn 6 kí tự\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(password)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong password\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        </br>\n" +
    "        <label class=\"control-label\">\n" +
    "            Nhập lại mật khẩu:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"loginRegister.passwordConfirm.$dirty && loginRegister.passwordConfirm.$valid && checkChar(passwordConfirm) && isPasswordEqual(password,passwordConfirm)\"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"password\" name=\"passwordConfirm\" class=\"form-control\" placeholder=\"Password\" \n" +
    "            ng-model=\"passwordConfirm\" required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "            \n" +
    "            <div ng-if=\"!checkChar(passwordConfirm)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong password\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!isPasswordEqual(password,passwordConfirm)\">\n" +
    "                <span style=\"color:#CC3333;\">\n" +
    "                    <i class=\"fa fa-exclamation-triangle\" style=\"color:#CC3333;\"></i> Mật khẩu không khớp !\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        <div class=\"checkbox\" >\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\" ng-model=\"readTerm\">\n" +
    "                Tôi đồng ý với các điều khoản đã nêu của Mazii\n" +
    "            </label>\n" +
    "        </div>\n" +
    "\n" +
    "        <button class=\"btn btn-danger btn-register\" ng-disabled=\"!loginRegister.$valid || !readTerm || !checkChar(email) || !checkChar(password) || !checkChar(passwordConfirm) || !isPasswordEqual(password,passwordConfirm)\"\n" +
    "        ng-click=\"register(email, password, passwordConfirm)\">\n" +
    "            Đăng ký\n" +
    "        </button>\n" +
    "    </form>\n" +
    "\n" +
    "    <div class=\"register-success\" ng-if=\"registerSuccess\">\n" +
    "        Bạn đã đăng ký tài khoản thành công. Hãy vào mail để xác thực tài khoản!<br>\n" +
    "        <b>Nếu bạn không thấy mail hãy kiểm tra hòm thư rác</b>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/register/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/register/right.html",
    "<div class=\"widget-container term-screen\">\n" +
    "	<h3>Điều khoản sử dụng</h3>\n" +
    "	<p>Với việc sử dụng Mazii, bao gồm phiên bản trình duyệt và các phiên bản dành cho điện thoại di động, bạn đồng ý chấp nhận các điều khoản nêu dưới đây. Những điều khoảng này có hiệu lực ngay khi bạn lần đầu tiên dùng Mazii.</p>\n" +
    "\n" +
    "	<p class=\"title\">Sử dụng Mazii</p>\n" +
    "	<p>Bạn đồng ý dùng Mazii chỉ với mục đích hỗ trợ, tham khảo và không xâm phạm quyền, giới hạn hoặc ngăn cấm người khác sử dụng Mazii.</p>\n" +
    "\n" +
    "	<p class=\"title\">Bản quyền trí tuệ</p>\n" +
    "	<p>Tất cả các bản quyền, mẫu mã, quyền về kiểu mẫu, bằng sáng chế và các quyền sở hữu trí tuệ khác (đăng ký cũng như không đăng ký) trên và trong Mazii và tất cả các nội dung (dưới mọi hình thức) được đặt trên mạng đều thuộc quyền sở hữu của Mazii hoặc người cấp phép cho Mazii. Bạn không được sao chép, tái bản, cắt xén, tải xuống, chuyển tải, hoặc dùng nội dung của Mazii bất cứ trong trường hợp nào, ngoại trừ cho mục đích cá nhân và không mang tính chất thương mại. Nếu dùng nội dung của Mazii cho những mục đích khác, bạn phải được Mazii cho phép trước bằng văn bản.</p>\n" +
    "\n" +
    "	<p class=\"title\">Thu thập thông tin</p>\n" +
    "	<p>Khi bạn sử dụng Mazii, chúng tôi sẽ thu thập thông tin của bạn. Bao gồm, địa chỉ ip, thông tin tài khoản bạn cung cấp như email và mật khẩu, thông tin về thiết bị di động như mã thiết bị, mã quảng cáo. Khi bạn thanh toán, mua vật phẩm trong ứng dụng, chúng tôi có thể lưu lại thông tin về tài khoản và giao dịch của bạn. Chúng tôi luôn cố gắng nhất có thể để đảm bảo các thông tin của bạn được an toàn.</p>\n" +
    "\n" +
    "	<p class=\"title\">Đóng góp nội dung cho Mazii</p>\n" +
    "	<p>Tất các các nội dung do người dùng đóng góp, sẽ được chúng tôi sử dụng để chia sẻ cho các người dùng khác. Các nội dung liên quan tới chính trị, phân biệt chủng tộc, văn hoá phẩm đồi truỵ, vi phạm thuần phong mỹ tục sẽ bị xoá bỏ mà không cần thông báo trước. Trường hợp các nội dung được đóng góp vi phạm bản quyền nội dung, chúng tôi sẽ thực hiện xoá nội dung khỏi hệ thống mà không thông báo trước khi nhận được thông báo của tác giả nội dung. Tất cả nội dung người dùng đóng góp sẽ thuộc quyền sở hữu của Mazii, Mazii được tuỳ ý sử dụng mà không cần phải thông báo trước.</p>\n" +
    "\n" +
    "	<p class=\"title\">Nội dung góp ý: </p>\n" +
    "	<p>1. Không vi phạm thuần phong mỹ tục của Việt Nam.</p>\n" +
    "	<p>2. Không tuyên truyền chống phá nhà nước, đảng phái, chính quyền.</p>\n" +
    "	<p>3. Không làm ảnh hưởng đến uy tín, danh dự của tổ chức cá nhân.</p>\n" +
    "	<p>4. Không viết những câu như: Từ này nghĩa là, nghĩa là mà viết trực tiếp nghĩa của từ vào phần góp ý.</p>\n" +
    "	<p>5. Khi số lượng \"Không thích\" của một góp ý lên đến 10 (tức là có 10 người không đồng ý với ý kiến góp ý đó), góp ý đó sẽ tự động bị xoá khỏi hệ thống.</p>\n" +
    "	<p>6. Khi góp ý vi phạm các điều ở trên sẽ bị xoá ngay khỏi hệ thống mà không cần báo trước. Nếu thành viên góp ý vi phạm nhiều lần sẽ bị xoá tài khoản mà không cần báo trước.</p>\n" +
    "\n" +
    "	<p class=\"title\">Miễn trừ trách nhiệm</p>\n" +
    "	<p>Mazii hoạt động như một dịch vụ hỗ trợ người học tiếng Nhật và không phải là phương pháp giáo dục thay thế phương pháp giáo dục khác. Chúng tôi tuyên bố không chịu trách nhiệm với các nội dung được đăng tải trên hệ thống của chúng tôi, bao gồm cả nội dung chúng tôi đề xuất và nội dung đóng góp của người dùng. Chúng tôi luôn cố gắng hết sức để đảm bảo hệ thống luôn sẵn sàng phục vụ người dùng, trường hợp chúng tôi nâng cấp, bảo trì, hoặc đóng cửa hệ thống sẽ không cần phải báo trước. Tất cả người dùng tự chịu trách nhiệm về việc bảo quản thông tin tài khoản cá nhân của mình.</p>\n" +
    "    \n" +
    "    <p class=\"title\">Thay đổi chính sách</p>\n" +
    "	<p>Chính sách này có thể được thay đổi mà không cần phải thông báo trước cho bạn.</p>\n" +
    "    \n" +
    "    \n" +
    "</div>\n" +
    "");
}]);

angular.module("views/reset-password/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/reset-password/main.html",
    "<div class=\"login-screen col-md-8 col-md-offset-2 col-xs-12\">\n" +
    "\n" +
    "    <form name=\"changepasswordForm\" ng-if=\"!logined\">\n" +
    "        <legend>Lấy lại mật khẩu cho người dùng</legend>\n" +
    "        \n" +
    "        <label class=\"control-label\">\n" +
    "            Email:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"changepasswordForm.email.$dirty && changepasswordForm.email.$valid && checkChar(email)\"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" ng-model=\"email\" required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "            <div ng-show=\"changepasswordForm.email.$dirty && changepasswordForm.email.$invalid\" class=\"text-danger\">\n" +
    "                <span ng-show=\"changepasswordForm.email.$error.required\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Bạn chưa nhập địa chỉ email\n" +
    "                </span>\n" +
    "                <span ng-show=\"changepasswordForm.email.$error.email\">\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không đúng định dạng email\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(email)\">\n" +
    "                <span >\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong email\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        </br>\n" +
    "        <label class=\"control-label\">\n" +
    "            Mật khẩu mới:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"changepasswordForm.passwordNew.$dirty && changepasswordForm.passwordNew.$valid && checkChar(passwordNew) \"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"password\" name=\"passwordNew\" class=\"form-control\" placeholder=\"Password\" ng-model=\"passwordNew\"\n" +
    "             ng-minlength=\"6\" required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "            <div ng-show=\"changepasswordForm.passwordNew.$dirty && changepasswordForm.passwordNew.$invalid\" class=\"text-danger\">\n" +
    "                <span ng-show=\"changepasswordForm.passwordNew.$error.minlength\">\n" +
    "                   <i class=\"fa fa-times text-danger\"></i> Mật khẩu phải dài hơn 6 kí tự\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(passwordNew)\">\n" +
    "                <span >\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong password\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        </br>\n" +
    "        <label class=\"control-label\">\n" +
    "            Nhập lại mật khẩu mới:\n" +
    "            <i class=\"fa fa-check text-success\" ng-show=\"changepasswordForm.passwordConfirm.$dirty && changepasswordForm.passwordConfirm.$valid && checkChar(passwordConfirm)\"></i>\n" +
    "        </label>\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"password\" name=\"passwordConfirm\" class=\"form-control\" placeholder=\"Password\" ng-model=\"passwordConfirm\" \n" +
    "            ng-minlength=\"6\" required>\n" +
    "            <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n" +
    "        </div>\n" +
    "             <div ng-show=\"changepasswordForm.passwordConfirm.$dirty && changepasswordForm.passwordConfirm.$invalid\" class=\"text-danger\">\n" +
    "                <span ng-show=\"changepasswordForm.passwordConfirm.$error.minlength\">\n" +
    "                   <i class=\"fa fa-times text-danger\"></i> Mật khẩu phải dài hơn 6 kí tự\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-if=\"!isPasswordEqual\">\n" +
    "                <i class=\"fa fa-exclamation-triangle\"></i> Mật khẩu không khớp ! Vui lòng nhập lại mật khẩu\n" +
    "            </div>\n" +
    "            <div ng-if=\"!checkChar(passwordConfirm)\">\n" +
    "                <span >\n" +
    "                    <i class=\"fa fa-times text-danger\"></i> Không được chứa kí tự đặc biệt trong password\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "        <button class=\"btn btn-danger btn-reset-password\" ng-disabled=\"!changepasswordForm.$valid || !checkChar(email) || \n" +
    "        !checkChar(passwordNew) || !checkChar(passwordConfirm)\"\n" +
    "        ng-click=\"resetPassword(email, passwordNew, passwordConfirm)\">\n" +
    "            Lấy lại mật khẩu\n" +
    "        </button>\n" +
    "\n" +
    "    </form>\n" +
    "\n" +
    "    <div class=\"alert alert-danger\" ng-if=\"logined\">\n" +
    "        Bạn chưa đăng nhập. Hãy đăng nhập trước <a href=\"#login\"></a>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("views/reset-password/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/reset-password/right.html",
    "");
}]);

angular.module("views/search/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/search/main.html",
    "<div class=\"search-input-container\">\n" +
    "    <div class=\"btn-group search-option\">\n" +
    "        <button class=\"btn btn-default search-option-word tab-active\" id=\"tab0\" ng-click=\"changeTypeSearch(0)\"><span>Từ vựng</span>\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-default search-option-kanji\" id=\"tab1\" ng-click=\"changeTypeSearch(1)\"><span>Hán tự</span></button>\n" +
    "         <button class=\"btn btn-default search-option-example\" id=\"tab2\" ng-click=\"changeTypeSearch(2)\"> <span>Câu</span></button>\n" +
    "        <button class=\"btn btn-default search-option-grammar\" id=\"tab3\" ng-click=\"changeTypeSearch(3)\"><span>Ngữ pháp</span>\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-default search-option-grammar not-mobile\" id=\"tab3\" ng-click=\"showHistoryPanel()\"><span>Lịch sử</span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "    <div class=\"input-group input-group-lg search-box-range col-xs-12 col-md-8 col-no-padding\">\n" +
    "        <input type=\"text\" placeholder=\"日本, nihon, Nhật Bản\" maxlength=\"64\" id=\"search-text-box\" class=\"form-control\" ng-enter=\"inputEnter();\"　focus-me>\n" +
    "        <button type=\"button\" class=\"btn btn-link\" id=\"show-draw-kanji\" title=\"Ẩn/Hiện bảng vẽ kanji\" ng-click=\"showKanjiDrawTable();\">\n" +
    "            <span class=\"fa fa-pencil-square-o fa-lg\"></span>\n" +
    "        </button>\n" +
    "        <button type=\"button\" class=\"btn btn-link\" ng-if=\"queryNotNull()\" ng-click=\"clearQuery();\" id=\"clear-search-text\">\n" +
    "            <span class=\"fa fa-times fa-lg\"></span>\n" +
    "        </button>\n" +
    "        <div class=\"input-group-btn\">\n" +
    "            <button type=\"button\" class=\"btn btn-primary\" id=\"search-button\" ng-click=\"inputEnter();\">\n" +
    "                <span class=\"fa fa-search fa-lg\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ng-kanji-recognize ng-if=\"isShowKanjiDraw()\"></ng-kanji-recognize>\n" +
    "</div>\n" +
    "<div class=\"list-suggest-history col-xs-12 col-md-8\" id=\"list-suggest-history\">\n" +
    "    <div class=\"suggest-item\" ng-repeat=\"item in suggestSen track by $index\" ng-click=\"suggestClick(item)\">\n" +
    "        <span><b>{{ item.split(' ')[0] }}</b> {{ item.replace(item.split(' ')[0], '') }} </span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"notify-new-version widget-container\" ng-if=\"showNotifynewVersion && !startSearch\">\n" +
    "    <ng-notify></ng-notify>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"tab-container col-md-12 col-xs-12 no-padding\">\n" +
    "    <div label=\"Từ vựng\" ng-if=\"tabSelected == 0\" class=\"col-md-6 col-xs-12 result-word\" style=\"float:left\">\n" +
    "        \n" +
    "        <div class=\"words-list\" ng-if=\"words != null\">\n" +
    "            <ng-word ng-repeat=\"word in words\" data=\"word\"></ng-word>\n" +
    "        </div>\n" +
    "        <div class=\"google-translate\" ng-if=\"words == null || words.length == 0\">\n" +
    "            <ng-google-translate data=\"googleTranslate\" ng-if=\"googleTranslate\"></ng-google-translate>\n" +
    "        </div>\n" +
    "        <div class=\"widget-container\" ng-if=\"conjugationVerb != null\">\n" +
    "            <ng-verb-conjugtion data=\"conjugationVerb\"></ng-verb-conjugtion>\n" +
    "        </div>\n" +
    "        \n" +
    "        <ng-synonyms data=\"googleTranslate\" ng-if=\"googleTranslate\"></ng-synonyms>\n" +
    "\n" +
    "         \n" +
    "       <ng-word-ja ng-repeat=\"dt in dataWordJa\" data=\"dt\"  ng-if=\"dt != null\"> </ng-word-ja>\n" +
    "\n" +
    "        <div class=\"suggest-list\" ng-if=\"suggest != null && suggest.length > 0\">\n" +
    "            \n" +
    "            <div class=\"suggest-title\">Các từ liên quan đến <b>{{ query }}</b></div>\n" +
    "            <div ng-repeat=\"word in suggest\">\n" +
    "                <div class=\"suggest-box\" ng-click=\"showDetailSuggest(word._id)\">\n" +
    "                    <div class=\"{{word._id}}\">\n" +
    "                        <p><span class=\"ja\">{{ word.word }}</span> {{ word.phonetic }}</p>\n" +
    "                        <p>◆ {{ word.means[0].mean }}</p>\n" +
    "                        <p class=\"button-show\">\n" +
    "                            <i class=\"fa fa-caret-down\" class=\"icon_{{ word._id }}\"></i>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"detail_{{word._id}} hiden detail-suggest\">\n" +
    "                        <button ng-click=\"setQueryType(word.word, 'word', word);\" class=\"btn btn-sm btn-default suggest-note\" data-toggle=\"modal\"><!--data-target=\"#myNote\"-->\n" +
    "                            <span class=\"fa fa-plus\"></span>\n" +
    "                        </button>\n" +
    "                        <p class=\"ja\">{{ word.word }}</p>\n" +
    "                        <i class=\"audio-word fa fa-volume-down fa-lg\" \n" +
    "                        ng-click=\"playAudio(word.word)\"></i>\n" +
    "                        <p class=\"phonetic\" ng-if=\"word.phonetic != null && word.phonetic != ''\">\n" +
    "                            {{ word.phonetic }}\n" +
    "                        </p>\n" +
    "                        <div class=\"type-word\" \n" +
    "                            ng-if=\"word.means[0].kind != null && word.means[0].kind != ''\">\n" +
    "                            ☆ {{ convertKindToReadable(word.means[0].kind) }} \n" +
    "                        </div>\n" +
    "                        <p class=\"mean-suggest\">◆ {{ word.means[0].mean }}</p>\n" +
    "                        <div ng-repeat=\"example in word.means[0].examples\" class=\"example\">\n" +
    "                            <p class=\"content\">{{ example.content }}</p>\n" +
    "                            <p class=\"mean\">{{ example.mean }}</p>\n" +
    "                        </div>\n" +
    "                    </div> \n" +
    "                </div>\n" +
    "                <div id=\"feedback-suggest-{{ word._id }}\" \n" +
    "                ng-if=\"showReportBox[word._id]\">\n" +
    "                    <ng-feedback data=\"{ id : word.mobileId == null ? word._id : word.mobileId, word : word.word }\"></ng-feedback>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"no-result\" ng-if=\"noResults\">\n" +
    "            Không tìm thấy từ vựng nào có liên quan tới: <b>{{ query }}</b>\n" +
    "        </div>    \n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6 col-sx-12 result-kanji-search-word\" \n" +
    "    ng-if=\"tabSelected == 0 && !noResultsKanjis && resultKanjis != null\">\n" +
    "        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n" +
    "            <p>Các chữ Hán trong <b>{{ query }}</b></p>\n" +
    "            <div class=\"panel panel-default\" ng-repeat=\"kanji in resultKanjis\">\n" +
    "                <div class=\"panel-heading\" id=\"heading{{$index}}\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{$index}}\" aria-expanded=\"true\" \n" +
    "                    aria-controls=\"collapse{{$index}}\">\n" +
    "                  <h4 class=\"panel-title\">\n" +
    "                        <span class=\"kanji\"> {{ kanji.kanji }} </span>\n" +
    "                        「{{ kanji.on }}」 \n" +
    "                        <b class=\"mean\">{{kanji.mean}}</b>\n" +
    "                  </h4>\n" +
    "                </div>\n" +
    "                <div id=\"collapse{{$index}}\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading{{$index}}\">\n" +
    "                  <div class=\"panel-body\">\n" +
    "                    <ng-kanji-result-search-word data=\"kanji\"></ng-kanji-result-search-word>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "\n" +
    "    <div label=\"Hán tự\" ng-if=\"tabSelected == 1\">\n" +
    "        <div class=\"list-kanji\" ng-if=\"kanjis != null\">\n" +
    "            <div class=\"btn-group\">\n" +
    "                <button type=\"button\" ng-repeat=\"kanji in kanjis\" class=\"btn btn-default btn-lg draw-single-kanji\" ng-click=\"changeKanjiShow($index);\" ng-class=\"kanjiSeletectClass($index);\">{{ kanji.kanji }}</button>\n" +
    "            </div>\n" +
    "            <div id=\"kanji-detail-result\">\n" +
    "                <ng-kanji data=\"getCurrentKanji()\"></ng-kanji>\n" +
    "            </div>\n" +
    "            \n" +
    "            \n" +
    "        </div>\n" +
    "        <div class=\"no-result\" ng-if=\"noResults\">\n" +
    "            Không có dữ liệu về chữ kanji: <b>{{ query }}</b>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div label=\"Mẫu câu\" ng-if=\"tabSelected == 2\" class=\"col-md-6 col-xs-12 result-example\">\n" +
    "        <div class=\"examples-list widget-container\" ng-if=\"examples != null\">\n" +
    "            <ng-example ng-repeat=\"exam in examples\" index=\"{{$index + 1}}\" data=\"exam\"></ng-example>\n" +
    "        </div>\n" +
    "        <div class=\"no-result\" ng-if=\"noResults\">\n" +
    "            Không tìm thấy ví dụ nào có liên quan tới: <b>{{ query }}</b>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div label=\"Ngữ pháp\" ng-if=\"tabSelected == 3\" class=\"col-md-6 col-xs-12 result-grammar\">\n" +
    "        <div class=\"grammar-list\" ng-if=\"grammars != null\">\n" +
    "            <ng-grammar ng-repeat=\"gr in grammars\" data=\"gr\"></ng-grammar>\n" +
    "        </div>\n" +
    "        <div class=\"no-result\" ng-if=\"noResults\">\n" +
    "            Không tìm thấy ngữ pháp: <b>{{ query }}</b>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6 col-sx-12\" ng-if=\"tabSelected == 3\">\n" +
    "        \n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"box-search\" ng-click=\"translate()\">\n" +
    "    <img src=\"imgs/search.png\" height=\"30px\">\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("views/search/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/search/right.html",
    "<button class=\"button button-default add-word-btn\" ng-click=\"addWord.show()\" ng-if=\"user != null\">Thêm từ mới</button>\n" +
    "<ng-mazii-qa></ng-mazii-qa>\n" +
    "<ng-newreport></ng-newreport>\n" +
    "<ng-check-category></ng-check-category> \n" +
    "<script>\n" +
    "    \n" +
    "    if (typeof FB != \"undefined\" && FB != null && FB.XFBML != null) {\n" +
    "        FB.XFBML.parse();\n" +
    "    } else {\n" +
    "        setTimeout(function () {\n" +
    "            if (typeof FB !== \"undefined\")\n" +
    "                FB.XFBML.parse();\n" +
    "\n" +
    "        }, 2000);\n" +
    "    }\n" +
    "</script>");
}]);

angular.module("views/sentence/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/sentence/main.html",
    "<div class='sentence-screen col-md-12 col-xs-12'>\n" +
    "    <div class=\"widget-container col-md-12 col-xs-12\">\n" +
    "        <div class=\"btn-group col-md-12 col-xs-12\">\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-choice-sentence btn-javi active-language\" \n" +
    "            ng-click=\"changeLanguage(0)\">\n" +
    "                Nhật => Việt\n" +
    "            </button>\n" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-choice-sentence btn-vija\"\n" +
    "            ng-click=\"changeLanguage(1)\">\n" +
    "                Việt => Nhật\n" +
    "            </button>\n" +
    "\n" +
    "            <button type=\"button\" class=\"btn btn-primary btn-choice-sentence\"\n" +
    "            ng-click=\"translateGoogle(from)\">\n" +
    "                <i class=\"fa fa-exchange\"></i> Dịch\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 col-xs-12\">\n" +
    "            <textarea name=\"from\" class=\"form-control\" rows=\"7\" ng-model=\"from\" \n" +
    "            placeholder=\" {{ placeholderJa }}\">\n" +
    "                \n" +
    "            </textarea>\n" +
    "\n" +
    "            <span class=\"delete glyphicon glyphicon-remove\" ng-click=\"delete()\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-6 col-xs-12\">\n" +
    "            <textarea name=\"to\" class=\"form-control\" rows=\"7\" ng-model=\"to\"\n" +
    "            placeholder=\"{{ placeholderVi }}\" readonly>\n" +
    "                \n" +
    "            </textarea>\n" +
    "\n" +
    "            <p class=\"phonetic\">{{ phonetic }}</p>\n" +
    "        </div>\n" +
    "    </div>  \n" +
    "\n" +
    "    <div class=\"box-search\" ng-click=\"translate()\">\n" +
    "        <img src=\"imgs/search.png\" height=\"30px\">\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("views/sentence/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/sentence/right.html",
    "<ng-mazii-qa></ng-mazii-qa>\n" +
    "<ng-newreport></ng-newreport>\n" +
    "<ng-check-category></ng-check-category> ");
}]);

angular.module("views/term/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/term/main.html",
    "<div class=\"widget-container term-screen\">\n" +
    "	<h3>Điều khoản sử dụng</h3>\n" +
    "	<p>Với việc sử dụng Mazii, bao gồm phiên bản trình duyệt và các phiên bản dành cho điện thoại di động, bạn đồng ý chấp nhận các điều khoản nêu dưới đây. Những điều khoảng này có hiệu lực ngay khi bạn lần đầu tiên dùng Mazii.</p>\n" +
    "\n" +
    "	<p class=\"title\">Sử dụng Mazii</p>\n" +
    "	<p>Bạn đồng ý dùng Mazii chỉ với mục đích hỗ trợ, tham khảo và không xâm phạm quyền, giới hạn hoặc ngăn cấm người khác sử dụng Mazii.</p>\n" +
    "\n" +
    "	<p class=\"title\">Bản quyền trí tuệ</p>\n" +
    "	<p>Tất cả các bản quyền, mẫu mã, quyền về kiểu mẫu, bằng sáng chế và các quyền sở hữu trí tuệ khác (đăng ký cũng như không đăng ký) trên và trong Mazii và tất cả các nội dung (dưới mọi hình thức) được đặt trên mạng đều thuộc quyền sở hữu của Mazii hoặc người cấp phép cho Mazii. Bạn không được sao chép, tái bản, cắt xén, tải xuống, chuyển tải, hoặc dùng nội dung của Mazii bất cứ trong trường hợp nào, ngoại trừ cho mục đích cá nhân và không mang tính chất thương mại. Nếu dùng nội dung của Mazii cho những mục đích khác, bạn phải được Mazii cho phép trước bằng văn bản.</p>\n" +
    "\n" +
    "	<p class=\"title\">Thu thập thông tin</p>\n" +
    "	<p>Khi bạn sử dụng Mazii, chúng tôi sẽ thu thập thông tin của bạn. Bao gồm, địa chỉ ip, thông tin tài khoản bạn cung cấp như email và mật khẩu, thông tin về thiết bị di động như mã thiết bị, mã quảng cáo. Khi bạn thanh toán, mua vật phẩm trong ứng dụng, chúng tôi có thể lưu lại thông tin về tài khoản và giao dịch của bạn. Chúng tôi luôn cố gắng nhất có thể để đảm bảo các thông tin của bạn được an toàn.</p>\n" +
    "\n" +
    "	<p class=\"title\">Đóng góp nội dung cho Mazii</p>\n" +
    "	<p>Tất các các nội dung do người dùng đóng góp, sẽ được chúng tôi sử dụng để chia sẻ cho các người dùng khác. Các nội dung liên quan tới chính trị, phân biệt chủng tộc, văn hoá phẩm đồi truỵ, vi phạm thuần phong mỹ tục sẽ bị xoá bỏ mà không cần thông báo trước. Trường hợp các nội dung được đóng góp vi phạm bản quyền nội dung, chúng tôi sẽ thực hiện xoá nội dung khỏi hệ thống mà không thông báo trước khi nhận được thông báo của tác giả nội dung. Tất cả nội dung người dùng đóng góp sẽ thuộc quyền sở hữu của Mazii, Mazii được tuỳ ý sử dụng mà không cần phải thông báo trước.</p>\n" +
    "\n" +
    "	<p class=\"title\">Nội dung góp ý: </p>\n" +
    "	<p>1. Không vi phạm thuần phong mỹ tục của Việt Nam.</p>\n" +
    "	<p>2. Không tuyên truyền chống phá nhà nước, đảng phái, chính quyền.</p>\n" +
    "	<p>3. Không làm ảnh hưởng đến uy tín, danh dự của tổ chức cá nhân.</p>\n" +
    "	<p>4. Không viết những câu như: Từ này nghĩa là, nghĩa là mà viết trực tiếp nghĩa của từ vào phần góp ý.</p>\n" +
    "	<p>5. Khi số lượng \"Không thích\" của một góp ý lên đến 10 (tức là có 10 người không đồng ý với ý kiến góp ý đó), góp ý đó sẽ tự động bị xoá khỏi hệ thống.</p>\n" +
    "	<p>6. Khi góp ý vi phạm các điều ở trên sẽ bị xoá ngay khỏi hệ thống mà không cần báo trước. Nếu thành viên góp ý vi phạm nhiều lần sẽ bị xoá tài khoản mà không cần báo trước.</p>\n" +
    "\n" +
    "	<p class=\"title\">Miễn trừ trách nhiệm</p>\n" +
    "	<p>Mazii hoạt động như một dịch vụ hỗ trợ người học tiếng Nhật và không phải là phương pháp giáo dục thay thế phương pháp giáo dục khác. Chúng tôi tuyên bố không chịu trách nhiệm với các nội dung được đăng tải trên hệ thống của chúng tôi, bao gồm cả nội dung chúng tôi đề xuất và nội dung đóng góp của người dùng. Chúng tôi luôn cố gắng hết sức để đảm bảo hệ thống luôn sẵn sàng phục vụ người dùng, trường hợp chúng tôi nâng cấp, bảo trì, hoặc đóng cửa hệ thống sẽ không cần phải báo trước. Tất cả người dùng tự chịu trách nhiệm về việc bảo quản thông tin tài khoản cá nhân của mình.</p>\n" +
    "    \n" +
    "    <p class=\"title\">Thay đổi chính sách</p>\n" +
    "	<p>Chính sách này có thể được thay đổi mà không cần phải thông báo trước cho bạn.</p>\n" +
    "\n" +
    "	\n" +
    "    \n" +
    "</div>\n" +
    "");
}]);

angular.module("views/write/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/write/main.html",
    "<div class=\"input-group input-group-lg input-group-write col-md-8 col-sx-12\">\n" +
    "    <input type=\"text\" placeholder=\"Nhập vào chữ kanji, ví dụ 日\" maxlength=\"10\" id=\"draw-text-box\" class=\"form-control\" ng-model=\"form.kanji\" ng-enter=\"searchKanji()\">\n" +
    "    <div class=\"input-group-btn\" ng-click=\"searchKanji()\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary\" id=\"search-button\" tabindex=\"-1\">\n" +
    "            <span class=\"fa fa-play fa-lg\"></span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"result-draw-kanji-write\" ng-if=\"showDrawKanji\">\n" +
    "	<ng-kanji-draw data=\"data.kanji\"></ng-kanji-draw>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"alert alert-danger alert-write\" ng-if=\"showResultNull\">\n" +
    "	Tiếng Nhật không có từ ngày!\n" +
    "</div>");
}]);

angular.module("views/write/right.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/write/right.html",
    "<ng-mazii-qa></ng-mazii-qa>\n" +
    "<ng-check-category></ng-check-category> \n" +
    "<ng-newreport></ng-newreport>");
}]);

angular.module("components/affilate/affilate-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/affilate/affilate-template.html",
    "<div class=\"affilate-screen\">\n" +
    "	<div ng-repeat=\"affilate in listAffilate\" class=\"affilate\" ng-click=\"clickToAds(affilate)\">\n" +
    "		<div ng-bind-html=\"affilate.link[0]\"></div>\n" +
    "	</div>	\n" +
    "</div>");
}]);

angular.module("components/check-category/check-category.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/check-category/check-category.html",
    "<div id=\"check-category\" ng-if=\"notNull\">\n" +
    "	<div class=\"box-notify-mean\">\n" +
    "		<div class=\"title\">Mazii thông minh</div>\n" +
    "		<div class=\"main\">\n" +
    "			<div class=\"thank\">\n" +
    "					<p class=\"thankForFeedback\" ng-if=\"thankForFeedback\"> Cảm ơn bạn đã góp ý giúp Mazii ngày càng tốt hơn!. </p>\n" +
    "				</div>\n" +
    "			<div ng-if=\"showHome\" class=\"feedBackHome\">\n" +
    "				<div class=\"check-question\">\n" +
    "				 	<p>Theo bạn, từ <span class=\"check-word\">{{wordCategory}} </span> này thuộc chủ đề <span class=\"check-word\"> {{category}} </span> có đúng không? </p>\n" +
    "				</div>\n" +
    "				<div class=\"check-example\">\n" +
    "				 	<p> <span ng-bind-html=\"exampleCategory\"></span> </p>\n" +
    "				</div>\n" +
    "				\n" +
    "				<div class=\"btn-feedback\">\n" +
    "				 	<div class=\"btn-f1\">\n" +
    "				 		<button class=\"btn btn-true\" ng-click=\"feedback(true)\"> Đúng </button>\n" +
    "				 	</div>	\n" +
    "				 	<div class=\"btn-f2\">\n" +
    "				 		<button class=\"btn btn-false\" ng-click=\"feedback(false)\"> Sai </button>\n" +
    "				 	</div>	\n" +
    "				</div>\n" +
    "			</div>	 \n" +
    "			<div ng-if=\"showFeedback\" class=\"userfeedback\">\n" +
    "				<div class=\"show-word\">\n" +
    "					<p>Vậy theo bạn, từ <span class=\"check-word\"> {{wordCategory}} </span> này thuộc chủ đề nào? </p>\n" +
    "				</div>\n" +
    "				<div class=\"show-feedback\">\n" +
    "					<span ng-if=\"showCategory\"> {{newCategory}} <i class=\"fa fa-times\" aria-hidden=\"true\" ng-click=\"removeCategory()\"></i> </span>\n" +
    "					<form name=\"formFeedback\">\n" +
    "						<input type=\"text\" tabindex=\"1\" autofocus class=\"input-feedback\" ng-model=\"Indata.feed\"  name=\"feed\" required ng-if=\"!showCategory\">\n" +
    "					</form>	\n" +
    "					<!-- <h1>{{formFeedback.feed.$valid}}</h1>	 -->\n" +
    "				</div>\n" +
    "				<ul class=\"list-category\" ng-if=\"Indata.feed != null && notShow\">\n" +
    "					  <li ng-repeat=\"x in names | filter:Indata.feed\" ng-click=\"selectCategory(x)\">\n" +
    "					    {{ x.vi_name }}\n" +
    "					  </li>\n" +
    "					</ul>\n" +
    "				<div class=\"send-feedback\"> \n" +
    "					<button class=\"btn btn-cancel\" ng-click=\"sendFeedback('cancel')\" > Hủy </button>\n" +
    "					<button class=\"btn btn-true\" ng-click=\"sendFeedback('send')\" > Gửi </button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    " ");
}]);

angular.module("components/check-category/feedback-category-modal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/check-category/feedback-category-modal.html",
    "<div id=\"feedback-modal\" ng-if=\"modalfeedback\">\n" +
    "	<div class=\"content\" ng-if=\"ShowChange\">\n" +
    "			<label class=\"checkbox-inline\">\n" +
    "			  <input type=\"radio\" id=\"Correct\" name=\"Correct\"    ng-click=\"checkCorrect('correct')\"> Đúng\n" +
    "			</label>\n" +
    "			<label class=\"checkbox-inline\">\n" +
    "			  <input type=\"radio\" id=\"Incorrect\" name=\"Correct\"  ng-click=\"checkCorrect('Incorrect')\"> Sai\n" +
    "			</label>\n" +
    "			<button class=\"submit-correct\" type=\"submit\" ng-click=\"sendSubmit()\">Gửi</button>\n" +
    "	</div>\n" +
    "	<div class=\"addCategory\" ng-if=\"showAddCategory\">\n" +
    "      <!-- <div class=\"title\">    \n" +
    "      {{::aux.entity}}\n" +
    "      </div> -->\n" +
    "      <div class=\"content\">\n" +
    "      	<div class=\"btn-form\">\n" +
    "      		<div class=\"title\">\n" +
    "      			<b>Chủ đề :</b>\n" +
    "      		</div>\n" +
    "      		<div class=\"cnt\">\n" +
    "		         <input type=\"text\" tabindex=\"1\" autofocus class=\"input-feedback\" ng-model=\"Indata.feed\"  name=\"feed\" required ng-if=\"!showCategory\">\n" +
    "		        	<span ng-if=\"showCategory\"> {{newCategory}} <i class=\"fa fa-times\" aria-hidden=\"true\" ng-click=\"removeCategory()\"></i> </span>\n" +
    "		       \n" +
    "		        <ul class=\"list-category\" ng-if=\"Indata.feed != null \">\n" +
    "						  <li ng-repeat=\"x in names | filter:Indata.feed\" ng-click=\"selectCategory(x)\">\n" +
    "						    {{ x.vi_name }}\n" +
    "						  </li>\n" +
    "						</ul>\n" +
    "					</div>	\n" +
    "				</div>	\n" +
    "				<div class=\"btn-send\">\n" +
    "					<button type=\"submit\" class=\"cancelSend\" ng-click=\"sendFeedBack('cancel')\"> Hủy</button>\n" +
    "        	<button type=\"submit\" class=\"sendDT\" ng-click=\"sendFeedBack('send', aux)\"> Gửi</button>	\n" +
    "				</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"thank\">\n" +
    "		<p class=\"thankForFeedback\" ng-if=\"thankForFba\"> Cảm ơn bạn đã góp ý giúp Mazii ngày càng tốt hơn!. </p>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/emailhole/emailhole-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/emailhole/emailhole-template.html",
    "<link href=\"//cdn-images.mailchimp.com/embedcode/classic-10_7.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
    "<style type=\"text/css\">\n" +
    "    #mc_embed_signup{\n" +
    "        background:#fff; \n" +
    "        clear:left; \n" +
    "        font:14px Helvetica,Arial,\n" +
    "        sans-serif; \n" +
    "        padding-bottom: 34px;\n" +
    "    }\n" +
    "    #mc_embed_signup .mc-field-group input{\n" +
    "        border-radius:0px \n" +
    "    }\n" +
    "    #mc_embed_signup .button{\n" +
    "        border-radius:0px \n" +
    "    }\n" +
    "    #mc_embed_signup_scroll .subscribe{\n" +
    "        position: absolute;\n" +
    "\n" +
    "    }\n" +
    "    #mc_embed_signup_scroll .not-subscribe{\n" +
    "        position: absolute;\n" +
    "        bottom: -32px;\n" +
    "        left: 120px;\n" +
    "    }\n" +
    "</style>\n" +
    "<div id=\"mc_embed_signup\">\n" +
    "<form action=\"//eup.us14.list-manage.com/subscribe/post?u=3c38374f1cfa4603de69a98ff&amp;id=628d888827\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate ng-if=\"!registered\">\n" +
    "    <div id=\"mc_embed_signup_scroll\">\n" +
    "        <p style=\"font-size: 14px;\">Đăng ký nhận bản tin tiếng Nhật song ngữ hàng tuần</p>\n" +
    "        <div class=\"mc-field-group\">\n" +
    "            <input type=\"email\" value=\"\" placeholder=\"Để lại email của bạn\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n" +
    "        </div>\n" +
    "        <div class=\"mc-field-group\">\n" +
    "            <input type=\"text\" value=\"\" placeholder=\"Tên bạn\" name=\"FNAME\" class=\"\" id=\"mce-FNAME\">\n" +
    "        </div>\n" +
    "        <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\n" +
    "            <input type=\"text\" name=\"b_3c38374f1cfa4603de69a98ff_628d888827\" tabindex=\"-1\" value=\"\" >\n" +
    "        </div>\n" +
    "        <div class=\"clear subscribe\">\n" +
    "            <input type=\"submit\" value=\"Đăng kí\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\">\n" +
    "        </div>\n" +
    "        <div class=\"clear not-subscribe\">\n" +
    "            <div id=\"mc-embedded-subscribe\" ng-click=\"noRegister()\" class=\"button\">Đóng</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>\n" +
    "</div>\n" +
    "<script type='text/javascript' src='js/mc-validate.js'></script>\n" +
    "<script type='text/javascript'>\n" +
    "    (function($) {\n" +
    "        window.fnames = new Array(); \n" +
    "        window.ftypes = new Array();\n" +
    "        fnames[0]='EMAIL';\n" +
    "        ftypes[0]='email';\n" +
    "        fnames[1]='FNAME';\n" +
    "        ftypes[1]='text';\n" +
    "    }\n" +
    "    (jQuery));\n" +
    "    //var $mcj = jQuery.noConflict(true);\n" +
    "</script>");
}]);

angular.module("components/example/example-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/example/example-template.html",
    "<div class=\"example-container\" ng-if=\"mergeExample != null\">\n" +
    "    <div class=\"example-index\" ng-if=\"index != null\">{{ index }}.</div>\n" +
    "    <div class=\"example-word sentence-exam\">\n" +
    "        <span ng-if=\"isJapanese\" class=\"japanese-char\">\n" +
    "            <ruby ng-repeat=\"me in mergeExample\">\n" +
    "                {{ me.k }} <rt>{{ me.h }}</rt>\n" +
    "            </ruby>\n" +
    "        </span>\n" +
    "        <span ng-if=\"!isJapanese\" ng-bind-html=\"data.content\">\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"example-mean-word sentence-exam\">\n" +
    "        <span ng-if=\"!isJapanese\" class=\"japanese-char\">\n" +
    "            <ruby ng-repeat=\"me in mergeExample\">\n" +
    "                {{ me.k }} <rt>{{ me.h }}</rt>\n" +
    "            </ruby>\n" +
    "        </span>\n" +
    "        <span ng-if=\"isJapanese\" ng-bind-html=\"data.mean\">\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"example-container\" ng-if=\"mergeExample == null\">\n" +
    "    <div class=\"example-index\" ng-if=\"index != null\">{{ index }}.</div>\n" +
    "    <div class=\"example-word sentence-exam\">\n" +
    "        <span ng-if=\"isJapanese\" class=\"japanese-char\" ng-bind-html=\"data.content\"></span>\n" +
    "        <span ng-if=\"!isJapanese\" ng-bind-html=\"data.mean\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"example-mean-word sentence-exam\">\n" +
    "        <span ng-if=\"!isJapanese\" class=\"japanese-char\" ng-bind-html=\"data.content\"></span>\n" +
    "        <span ng-if=\"isJapanese\" ng-bind-html=\"data.mean\"></span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/feedback/feedback-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/feedback/feedback-template.html",
    "<div class=\"ng-feedback\">\n" +
    "    <div class=\"show-panel-mean-of-user\" id=\"collapseFeedback-{{ data.id }}\">\n" +
    "    <!-- <div class=\"show-panel-mean-of-user\" class=\"collapse\" id=\"collapseFeedback\"> -->\n" +
    "         <div class=\"wrapper\">\n" +
    "            <div class=\"number-report\" ng-if=\"numberReport > 0\">\n" +
    "                <p >\n" +
    "                    Có {{ numberReport }} góp ý \n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"item-mean\" ng-if=\"!noReport\" ng-repeat=\"report in listReport\">\n" +
    "                <div class=\"user-mean\"> \n" +
    "                    <div class=\"value-mean-and-delete\">                    \n" +
    "                        <p  class=\"mean\" ng-repeat=\"value in report.mean track by $index\">\n" +
    "                            {{ value }}\n" +
    "                        </p>                    \n" +
    "                        <span data-toggle=\"tooltip\" title=\"Xóa\" ng-if=\"user.username == report.username\" class=\"delete-mean\"\n" +
    "                         ng-click=\"deleteMeanOfUser(report.reportId, data.id)\">\n" +
    "                            <i class=\"fa fa-times\"></i>\n" +
    "                        </span>\n" +
    "                    </div>   \n" +
    "\n" +
    "                    <div class=\"user-infor-comment\">\n" +
    "                        <span class=\"user-like like-{{ report.reportId }}\"\n" +
    "                         ng-click=\"rateMean(report.reportId, 'like')\">\n" +
    "                            {{ report.like }}\n" +
    "                            <i class=\"fa fa-thumbs-up\"></i>\n" +
    "                        </span>\n" +
    "                        <span class=\"user-dislike dislike-{{ report.reportId }}\"\n" +
    "                        ng-click=\"rateMean(report.reportId,'dislike')\">\n" +
    "                            {{ report.dislike }}\n" +
    "                            <i class=\"fa fa-thumbs-down\"></i>\n" +
    "                        </span>\n" +
    "                        <span class=\"username\">\n" +
    "                            {{ report.username }}\n" +
    "                        </span>\n" +
    "                    </div>  \n" +
    "                </div>\n" +
    "\n" +
    "                <ul class=\"pagination-web\" ng-if=\"listIndex.length > 0\">\n" +
    "                    <li ng-click=\"previousPaginationLast()\" ng-if=\"showButtonPaginationPreviousLast\">\n" +
    "                        <a><i class=\"fa fa-angle-double-left\"></i></a>\n" +
    "                    </li>\n" +
    "                    <li ng-click=\"previousPagination()\" ng-if=\"showButtonPaginationPreviousLast\" >\n" +
    "                        <a><i class=\"fa fa-angle-left\"></i></a>\n" +
    "                    </li>\n" +
    "                    <li ng-repeat=\"pagination in listIndex\" ng-click=\"changePagination(pagination)\"\n" +
    "                     id=\"page-{{ pagination }}\">\n" +
    "                       <a>{{ pagination }}</a> \n" +
    "                    </li>\n" +
    "                    <li ng-if=\"showButtonPaginationNextLast\" ng-click=\"nextPagination()\">\n" +
    "                        <a><i class=\"fa fa-angle-right\"></i></a>\n" +
    "                    </li>\n" +
    "                    <li ng-if=\"showButtonPaginationNextLast\" ng-click=\"nextPaginationLast()\">\n" +
    "                        <a><i class=\"fa fa-angle-double-right\"></i></a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>           \n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"add-mean-user\">\n" +
    "            <p ng-if=\"notLogin\">\n" +
    "                <a href=\"#login\">Đăng nhập</a> để góp ý\n" +
    "            </p>\n" +
    "\n" +
    "            <form name=\"formReport\" ng-if=\"!notLogin\" id=\"formReport-{{ data.id }}\"> \n" +
    "                <textarea id=\"model-web-{{ data.id }}\" placeholder=\"Thêm nghĩa hoặc ví dụ cho từ. Ấn SHIFT + ENTER để xuống dòng\" class=\"enter-report-model\" \n" +
    "                ng-keypress=\"addOrUpdate(data.id, data.word, reportedMean, $event)\"></textarea>\n" +
    "               \n" +
    "                <p ng-if=\"showAlert\">\n" +
    "                    <span ng-if=\"faIcon == 'fa-exclamation-triangle'\" class=\"update-fails\">\n" +
    "                        <i class=\"fa {{ faIcon }}\"></i> {{ messageAlert }}\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"faIcon == 'fa-check'\" class=\"update-success\">\n" +
    "                        <i class=\"fa {{ faIcon }}\"></i> {{ messageAlert }}\n" +
    "                    </span>\n" +
    "                </p>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"modal fade\" id=\"confirmDeleteMeanOfUser\">\n" +
    "        <div class=\"modal-dialog\">\n" +
    "          <div class=\"modal-content confirmDeleteMeanOfUserModal\">\n" +
    "            <div class=\"modal-header\">\n" +
    "              <button type=\"button\" class=\"close close-delete-history-modal\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;\n" +
    "              </button>\n" +
    "              <h4 class=\"modal-title\">Xóa Góp Ý</h4>\n" +
    "            </div>\n" +
    "            <hr>\n" +
    "            <div class=\"modal-body\">\n" +
    "              Bạn có muốn xóa góp ý của mình ?\n" +
    "            </div>\n" +
    "            <hr>\n" +
    "            <div class=\"modal-footer\">\n" +
    "              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Hủy</button>\n" +
    "              <button type=\"button\" class=\"btn btn-danger deleteMeanOfUser\">Xóa</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "$(document).ready(function(){\n" +
    "    $('[data-toggle=\"tooltip\"]').tooltip();   \n" +
    "});\n" +
    "</script>\n" +
    "");
}]);

angular.module("components/flashcard/flashcard-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/flashcard/flashcard-template.html",
    "<div class=\"modal fade\" id=\"modalFlashcard\">\n" +
    "	<div class=\"modal-dialog\">\n" +
    "		<div class=\"modal-content\">\n" +
    "			<div class=\"modal-header\">\n" +
    "				  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "				  <h4 class=\"modal-title\">Luyện tập {{ title }}</h4>\n" +
    "\n" +
    "          <div class=\"btn-group show-all-remember\" value=\"{{ typeShow }}\">\n" +
    "              <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
    "                  <span ng-if=\"typeShow == 'all'\">Tất cả</span>\n" +
    "                  <span ng-if=\"typeShow == 'remember'\">Đã nhớ</span>\n" +
    "                  <span ng-if=\"typeShow == 'notRemember'\">Chưa nhớ</span>\n" +
    "                  <i class=\"fa fa-caret-down\"></i>\n" +
    "              </button>\n" +
    "              <ul class=\"dropdown-menu choise-all-remember\" role=\"menu\" aria-labelledby=\"jlpt-type\">\n" +
    "                  <li><a tabindex=\"-1\" value=\"all\" ng-click=\"seclectToShow('all')\" data-target=\"#\">Tất cả</a>\n" +
    "                  </li>\n" +
    "                  <li>\n" +
    "                      <a tabindex=\"-1\" value=\"remember\" ng-click=\"seclectToShow('remember')\" data-target=\"#\">\n" +
    "                          Đã nhớ</a>\n" +
    "                  </li>\n" +
    "                  <li>\n" +
    "                      <a tabindex=\"-1\" value=\"notRemember\" ng-click=\"seclectToShow('notRemember')\" data-target=\"#\">\n" +
    "                          Chưa nhớ</a>\n" +
    "                  </li>\n" +
    "              </ul>\n" +
    "          </div>\n" +
    "			</div>\n" +
    "			<div class=\"modal-body\">\n" +
    "\n" +
    "				<div class=\"containe\" ng-if=\"title == 'hán tự' \"><!--ng if kanji-->\n" +
    "					<div id=\"jlpt\" class=\"carousel slide\" data-ride=\"carousel\"  data-interval=\"false\" data-wrap=\"false\">\n" +
    "						<div class=\"carousel-inner\" role=\"listbox\" ng-if=\"loadRemember\">\n" +
    "\n" +
    "  							<div class=\"item {{ activeFlashcard($index) }}\" ng-if=\"listFlashcard != null\" ng-repeat=\"flashcard in listFlashcard\" >\n" +
    "                    <input type=\"hidden\" value=\"{{ flashcard.id }}\" class=\"flash-id\">\n" +
    "    								<div class=\"flip\" ng-click=\"flip(flashcard.id)\"> \n" +
    "      									<div class=\"card card-{{ flashcard.id }}\"> \n" +
    "        										<div class=\"face front japanese-char\">\n" +
    "                              {{ flashcard.front }}\n" +
    "                              <div class=\"pagination-kanji\">\n" +
    "                                   <p>{{$index+1}}/{{sizeOfListFlashcard}}</p>\n" +
    "                                </div>\n" +
    "                            </div> \n" +
    "        										<div class=\"face back \">\n" +
    "                                <div class=\"kanji-front\">\n" +
    "                                    <div class=\"kanji-front-left japanese-char\">\n" +
    "                                      {{ flashcard.front }}\n" +
    "                                    </div>\n" +
    "                                    <div class=\"kanji-front-right\">\n" +
    "                                       <p class=\"japanese-char\"><span>訓 : </span>{{ flashcard.after[0].kun }}</p>\n" +
    "                                      <p class=\"japanese-char\"><span>音 : </span>{{ flashcard.after[0].on }}</p>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"kanji-mean\">\n" +
    "                                    <p><span>Nghĩa : </span>{{ flashcard.after[0].mean }}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"kanji-example\">\n" +
    "                                    <table class=\"japanese-char\">\n" +
    "                                        <tr ng-repeat=\"x in flashcard.after[0].examples  \">\n" +
    "                                            <td ng-if=\"$index < 3\">{{ showExampleKanji(x.w) }}</td>\n" +
    "                                            <td ng-if=\"$index < 3\">{{ x.p }}</td> \n" +
    "                                            <td ng-if=\"$index < 3\">{{ showExampleKanji(x.m) }}</td>\n" +
    "                                        </tr>\n" +
    "                                    </table>\n" +
    "                                </div>\n" +
    "                            </div> \n" +
    "    									  </div> \n" +
    "    								</div>\n" +
    "  							</div>\n" +
    "                <div class=\"show-list-empty\" ng-if=\"showEmpty\">Danh sách trống</div>  \n" +
    "						</div>\n" +
    "						<a class=\"left carousel-control\" href=\"#jlpt\" role=\"button\" data-slide=\"prev\" ng-click=\"prev()\" >\n" +
    "						    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n" +
    "						</a>\n" +
    "						<a class=\"right carousel-control\" href=\"#jlpt\" role=\"button\" data-slide=\"next\" ng-click=\"next()\">\n" +
    "						    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "				</div><!-- end ng if kanji-->\n" +
    "\n" +
    "        <div class=\"containe\" ng-if=\"title == 'từ vựng' \"><!--ng if word-->\n" +
    "          <div id=\"jlpt\" class=\"carousel slide\" data-ride=\"carousel\"  data-interval=\"false\" data-wrap=\"false\">\n" +
    "            <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                <div class=\"item {{ activeFlashcard($index) }}\" ng-if=\"listFlashcard != null\" \n" +
    "                ng-repeat=\"flashcard in listFlashcard\">\n" +
    "                    <input type=\"hidden\" value=\"{{ flashcard.id }}\" class=\"flash-id\">\n" +
    "                    <div class=\"flip\" ng-click=\"flip(flashcard.id)\"> \n" +
    "                        <div class=\"card card-{{ flashcard.id }}\"> \n" +
    "                            <div class=\"face front japanese-char\">\n" +
    "                                  {{ flashcard.front }}\n" +
    "                                  <div class=\"pagination-kanji\">\n" +
    "                                       {{$index+1}}/{{sizeOfListFlashcard}}\n" +
    "                                  </div>\n" +
    "                            </div> \n" +
    "                            <div class=\"face back \">\n" +
    "                                <div class=\"word-front japanese-char\">{{ flashcard.front }}</div>\n" +
    "                                <div class=\"word-phonetic japanese-char\">「 {{ flashcard.after.phonetic }} 」</div>\n" +
    "                                <div class=\"word-mean\">\n" +
    "                                    <p><span>Nghĩa : </span>{{ flashcard.after.mean }}</p>\n" +
    "                                </div>\n" +
    "                            </div> \n" +
    "                        </div> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"show-list-empty\" ng-if=\"showEmpty\">Danh sách trống</div>  \n" +
    "            </div>\n" +
    "            <a class=\"left carousel-control\" href=\"#jlpt\" role=\"button\" data-slide=\"prev\" ng-click=\"prev()\" >\n" +
    "                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n" +
    "            </a>\n" +
    "            <a class=\"right carousel-control\" href=\"#jlpt\" role=\"button\" data-slide=\"next\" ng-click=\"next()\">\n" +
    "                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div><!--end ng if word-->\n" +
    "\n" +
    "        <div class=\"containe\" ng-if=\"title == 'ngữ pháp' \"><!--ng if grammar-->\n" +
    "          <div id=\"jlpt\" class=\"carousel slide\" data-ride=\"carousel\"  data-interval=\"false\" data-wrap=\"false\">\n" +
    "            <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "                <div class=\"item {{ activeFlashcard($index) }}\" ng-if=\"listFlashcard != null\"\n" +
    "                 ng-repeat=\"flashcard in listFlashcard\">\n" +
    "                    <input type=\"hidden\" value=\"{{ flashcard.id }}\" class=\"flash-id\">\n" +
    "                    <div class=\"flip\" ng-click=\"flip(flashcard.id)\"> \n" +
    "                        <div class=\"card card-{{ flashcard.id }}\"> \n" +
    "                            <div class=\"face front \">\n" +
    "                                <div class=\"front-grammar japanese-char\">\n" +
    "                                    {{ getBeautyTitleGrammar(flashcard.front) }}\n" +
    "                                </div>\n" +
    "                                <div class=\"empty\"></div>\n" +
    "                                <div class=\"pagination-grammar\">\n" +
    "                                     {{$index+1}}/{{sizeOfListFlashcard}}\n" +
    "                                </div>\n" +
    "                            </div> \n" +
    "                            <div class=\"face back \">\n" +
    "                                 <div class=\"grammar-front japanese-char\">\n" +
    "                                  {{ getBeautyTitleGrammar(flashcard.front) }}\n" +
    "                                </div>\n" +
    "                                <div class=\"grammar-example\">\n" +
    "                                  <p><span>Ví dụ : </span>{{ showExampleGrammar(flashcard.after) }}</p>\n" +
    "                                </div>\n" +
    "                            </div> \n" +
    "                        </div> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"show-list-empty\" ng-if=\"showEmpty\">Danh sách trống</div>  \n" +
    "            </div>\n" +
    "            <a class=\"left carousel-control\" href=\"#jlpt\" role=\"button\" data-slide=\"prev\" ng-click=\"prev()\"  >\n" +
    "                <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n" +
    "            </a>\n" +
    "            <a class=\"right carousel-control\" href=\"#jlpt\" role=\"button\" data-slide=\"next\" ng-click=\"next()\">\n" +
    "                <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </div><!--end ng-if grammar-->\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"modal-footer\">\n" +
    "          <div class=\"remember-or-notremember\">\n" +
    "              Bạn đã nhớ ?\n" +
    "              <button type=\"button\" class=\"btn btn-default btn-remember\" \n" +
    "              ng-click=\"clickRemember()\" id=\"remembered\">Đã nhớ</button>\n" +
    "              <button type=\"button\" class=\"btn btn-default\" ng-click=\"clickNoRemember()\"\n" +
    "               id=\"no-remember\">Chưa nhớ</button>\n" +
    "          </div>\n" +
    "				  <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Đóng</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "  $(\"#jlpt\").carousel();\n" +
    "</script>\n" +
    "");
}]);

angular.module("components/footer/footer-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/footer/footer-template.html",
    "<div class=\"marketing\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"col-sm-12 col-md-4 col-lg-4 scale\">\n" +
    "        <h4>Tải Mazii trên</h4>\n" +
    "        <a href=\"https://itunes.apple.com/app/apple-store/id933081417\" target=\"_blank\" onclick=\"ga('send', 'event', 'button', 'click', 'iphone-mobile-bottom')\"><img class=\"app-link big\" src=\"imgs/app_store_footer.png\"></a>\n" +
    "        <a href=\"https://play.google.com/store/apps/details?id=com.mazii.dictionary\" target=\"_blank\" onclick=\"ga('send', 'event', 'button', 'click', 'android-mobile-bottom')\"><img class=\"app-link big\" src=\"imgs/google_play.png\"></a>\n" +
    "        <a href=\"https://chrome.google.com/webstore/detail/translate-japanese-mazii/lkjffochdceoneajnigkbdddjdekhojj\" target=\"_blank\" onclick=\"ga('send', 'event', 'button', 'click', 'chrome-extension-bottom')\"><img class=\"app-link\" src=\"imgs/chromewebstore.png\"></a>\n" +
    "        <ul class=\"list-menu-footer\">\n" +
    "          <li>\n" +
    "            <a href=\"#/about\">Về Mazii</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"#/help\">Trợ giúp</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"#/term\">Điều khoản sử dụng</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-12 col-md-4 col-lg-4 scale\">\n" +
    "          <h4>Sản phẩm khác</h4>\n" +
    "          <ul class=\"list-menu-footer\">\n" +
    "          <li>\n" +
    "            <a href=\"http://minder.vn\" target=\"_blank\" onclick=\"ga('send', 'event', 'button', 'click', 'minder')\">Học từ vựng thông minh Minder</a>\n" +
    "            <p class=\"other-product-desc\">Giúp bạn ghi nhớ từ vựng hiệu quả</p>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"http://mina.mazii.net/\" target=\"_blank\" onclick=\"ga('send', 'event', 'button', 'click', 'minna')\">Học tiếng Nhật Minna</a>\n" +
    "             <p class=\"other-product-desc\">Tự học tiếng Nhật đến N3</p>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"http://blog.mazii.net/\" target=\"_blank\" onclick=\"ga('send', 'event', 'button', 'click', 'blog')\">Mazii Blog</a>\n" +
    "            <p class=\"other-product-desc\">Nơi chia sẻ những kiến thức hữu ích về Nhật Bản</p>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "        <div class=\"col-sm-12 col-md-4 col-lg-4 scale\">\n" +
    "            <div class=\"fb-page\" data-href=\"https://www.facebook.com/maziinet/\" data-tabs=\"timeline\" data-width=\"300\" data-height=\"250\" data-small-header=\"true\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\"><div class=\"fb-xfbml-parse-ignore\"><blockquote cite=\"https://www.facebook.com/maziinet/\"><a href=\"https://www.facebook.com/maziinet/\">Mazii</a></blockquote></div></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "<script>\n" +
    "    var parsed = false;\n" +
    "    if (typeof FB != \"undefined\" && FB != null && FB.XFBML != null) {\n" +
    "        FB.XFBML.parse();\n" +
    "        parsed = true;\n" +
    "    } else {\n" +
    "        setTimeout(function () {\n" +
    "            if (typeof FB !== \"undefined\" && !parsed)\n" +
    "                FB.XFBML.parse();\n" +
    "\n" +
    "        }, 2000);\n" +
    "    }\n" +
    "</script>");
}]);

angular.module("components/google-translate/google-translate-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/google-translate/google-translate-template.html",
    "<div class=\"word-container widget-container google-translate\" ng-if=\"aux != null\">\n" +
    "    <div class=\"main-word\">\n" +
    "      {{ ::aux.entity }}\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"mean-detail-range\">\n" +
    "        <div class=\"type-word\">{{  NameCategory}}</div> <!-- ::aux.entityJp -->\n" +
    "        <div class=\"example-range\">\n" +
    "          {{ ::aux.def }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"feedback\">\n" +
    "      <ng-check-category-modal> </ng-check-category-modal>\n" +
    "    </div>\n" +
    "    <div class=\"gogl-word-search-helper\">[提供元：株式会社オルツ拡張固有表現認識API <span ng-if=\"aux.def != null && aux.def != ''\">(エンティティ定義：<a href=\"https://ja.wikipedia.org/wiki/{{ ::aux.entity }}\" target=\"_blank\">Wikipedia</a>)</span>]\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"google-translate-result word-detail-content\" >\n" +
    "        <div class=\"gogl-word-searched\">{{ data.sentences[0].orig }}</div>\n" +
    "        <div class=\"gogl-word-search-translit\" ng-if=\"data.sentences[1] && data.sentences[1].src_translit\"> {{ data.sentences[1].src_translit }} </div>\n" +
    "        <div class=\"gogl-word-search-trans\">{{ data.sentences[0].trans }} </div>\n" +
    "        <div class=\"gogl-word-search-translit\" ng-if=\"data.sentences[1] && data.sentences[1].translit\"> {{ data.sentences[1].translit }}</div>\n" +
    "        <div class=\"gogl-word-search-helper\">Dịch tự động</div>\n" +
    "    </div>");
}]);

angular.module("components/grammar/grammar-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/grammar/grammar-template.html",
    "<div class=\"panel panel-default\" ng-if=\"!showDetailImediately\">\n" +
    "    <div class=\"panel-heading\">\n" +
    "        <h4 class=\"panel-title\">\n" +
    "            <a href=\"#collapseGrammar{{id}}\" class=\"grammar-open-link\" data-toggle=\"collapse\" data-parent=\"#grammar-list\" ng-click=\"loadDetail()\"> \n" +
    "                <div class='grammar-item-list'>{{ data.level }}:{{ title }}</div>\n" +
    "                <div class='grammar-item-mean'> {{ titleMean }} </div>\n" +
    "            </a>\n" +
    "        </h4>\n" +
    "    </div>\n" +
    "    <div id=\"collapseGrammar{{id}}\" class=\"panel-collapse collapse\">\n" +
    "        <div class=\"panel-body\" id=\"parent-detail-gr{{id}}\">\n" +
    "            <div class=\"grammar-usages\" ng-repeat=\"usage in detail.usages\">\n" +
    "                <div class=\"add-note-me\">\n" +
    "                    <button ng-click=\"setQueryGrammar(usage.synopsis,'grammar_detail',id, removeJapaneseChar(usage.mean));\" class=\"btn btn-sm btn-default\" data-toggle=\"modal\">\n" +
    "                        <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "                <div class=\"gr-use-synopsis\" ng-bind-html=\"usage.synopsis\"></div>\n" +
    "                <div class=\"gr-use-explain\"><div class=\"gr-use-title\">意味：</div>　<span ng-bind-html=\"removeJapaneseChar(usage.mean)\"></span> </div>\n" +
    "                <div class=\"example-title\">例：</div>\n" +
    "                <ng-example data=\"exam\" ng-repeat=\"exam in usage.examples\" index=\"{{$index + 1}}\"></ng-example>\n" +
    "                <div class=\"gr-use-note\" ng-if=\"usage.explain != null && usage.explain != ''\">\n" +
    "                    <div class=\"gr-explain-title\">説明:</div>\n" +
    "                    <div class=\"gr-explain-note\" ng-repeat=\"expl in splitExplain(usage.explain)\" ng-bind-html=\"expl\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"gr-use-notice\" ng-if=\"usage.note != null\">\n" +
    "                    <div class=\"gr-notice-title\">注意:</div>\n" +
    "                    <div class=\"\" ng-bind-html=\"usage.note\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!--<ng-report data=\"data\" type=\"grammar\"></ng-report>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"grammar-usages\" ng-repeat=\"usage in detail.usages\" ng-if=\"showDetailImediately\">\n" +
    "    <div class=\"gr-use-synopsis\"> {{ usage.synopsis }} </div>\n" +
    "    <div class=\"gr-use-explain\"><div class=\"gr-use-title\">意味：</div>　<span ng-bind-html=\"removeJapaneseChar(usage.mean)\"></span> </div>\n" +
    "    <div class=\"example-title\">例：</div>\n" +
    "    <ng-example data=\"exam\" ng-repeat=\"exam in usage.examples\" index=\"{{$index + 1}}\"></ng-example>\n" +
    "    <div class=\"gr-use-note\" ng-if=\"usage.explain != null && usage.explain != ''\">\n" +
    "        <div class=\"gr-explain-title\">説明:</div>\n" +
    "        <div class=\"gr-explain-note\" ng-repeat=\"expl in splitExplain(usage.explain)\" ng-bind-html=\"expl\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"gr-use-notice\" ng-if=\"usage.note != null\">\n" +
    "        <div class=\"gr-notice-title\">注意:</div>\n" +
    "        <ul>\n" +
    "            <li ng-repeat=\"note in splitNote(usage.note)\" ng-bind-html=\"note\" ng-if=\"note != ''\"></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <!--<ng-report data=\"detail\" type=\"grammarDetail\"></ng-report>-->\n" +
    "</div>\n" +
    "\n" +
    "<ng-note-content></ng-note-content>\n" +
    "<ng-category></ng-category>");
}]);

angular.module("components/history/history-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/history/history-template.html",
    "<div class=\"widget history-screen\">\n" +
    "    <div class=\"title-history\">\n" +
    "    	<span>Lịch sử tra cứu</span>\n" +
    "		<a class=\"btn btn-danger\" ng-click=\"deleteHistory()\">Xóa</a>\n" +
    "    </div><hr>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"history-item\" ng-repeat=\"item in history.slice().reverse() track by $index\" ng-click=\"search(item.type, item.query);\">\n" +
    "            <div class=\"history-type\" value=\"{{ item.type[0] }}\"> {{ item.type[0] }} </div>\n" +
    "            <div class=\"his-content\">{{ item.query }}</div>\n" +
    "            <div class=\"his-time\">{{ getTime(item.date) }}</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/kanji-draw/kanji-draw-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/kanji-draw/kanji-draw-template.html",
    "<div class=\"kanji-draw-container\">\n" +
    "    <div id=\"image-holder\"></div>\n" +
    "    <div class=\"kanji-draw-again\">\n" +
    "        <button type=\"button\" class=\"btn btn-primary btn-sm\" ng-click=\"resetDrawKanjiStroke()\">\n" +
    "            <i class=\"fa fa-repeat\"></i> Vẽ lại\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/kanji-recognize/kanji-recognize-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/kanji-recognize/kanji-recognize-template.html",
    "<div id=\"draw-table\">\n" +
    "    <canvas id=\"draw-canvas\">\n" +
    "    </canvas>\n" +
    "    <div id=\"draw-kanji-result\">\n" +
    "    </div>\n" +
    "    <div class=\"draw-kanji-buttons\">\n" +
    "        <button type=\"button\" id=\"draw-clear\" class=\"btn btn-default\">Clear</button>\n" +
    "        <button type=\"button\" id=\"draw-back\" class=\"btn btn-default\">Back</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/kanji-result-search-word/kanji-result-search-word-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/kanji-result-search-word/kanji-result-search-word-template.html",
    "<div class=\"kanji-container\">\n" +
    "    <div class=\"kanji-main-infor widget-container\" style=\"box-shadow: none\">\n" +
    "        <div class=\"pronoun-item\"><span class='kunyomi-text'>Bộ: </span><span>{{ data.kanji }} - {{ data.mean }}</span></div>\n" +
    "        <div class=\"pronoun-item\" ng-if=\"data.kun != null && data.kun != ''\"><span class='kunyomi-text'>訓:</span>  {{ data.kun }} </div>\n" +
    "        <div class=\"pronoun-item\" ng-if=\"data.on != null && data.on != ''\"><span class='kunyomi-text'>音:</span>  {{ data.on }} </div>\n" +
    "        <div class=\"pronoun-item\" ng-if=\"data.stroke_count != null\"><span class='kunyomi-text'>Số nét:</span> {{ data.stroke_count }} </div>\n" +
    "        <div class=\"level\" ng-if=\"data.level != null\"><span class='kunyomi-text'>JLPT:</span> {{ data.level }}</div>\n" +
    "        <div class=\"comp-detail\" ng-if=\"data.compDetail != null\"><span class='kunyomi-text'>Bộ thành phần: </span>\n" +
    "            <span class=\"kanji-component\" ng-repeat=\"cd in data.compDetail\">\n" +
    "                {{ cd.w }} <span ng-if=\"cd.h != null && cd.h != ''\"> {{ cd.h }}</span>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"short-mean\"><span class='kunyomi-text'>Nghĩa: </span>\n" +
    "		\n" +
    "            <p>{{ getTitle() }}</p>\n" +
    "            <ul class=\"list-collapse\">\n" +
    "                <li ng-repeat=\"mean in getDetails\">\n" +
    "                    {{ mean }}\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <a class=\"view-detail\" ng-click=\"viewDetail(data.kanji)\">Chi tiết hơn >></a>\n" +
    "    </div>\n" +
    "");
}]);

angular.module("components/kanji/kanji-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/kanji/kanji-template.html",
    "<div class=\"kanji-container\">\n" +
    "    <div class=\"col-md-6 col-sx-12\">\n" +
    "        <div class=\"kanji-main-infor widget-container\">\n" +
    "            <div class=\"add-note-me\">\n" +
    "                <button  ng-click=\"setQueryType(data.kanji, 'kanji', data.mean);\" class=\"btn btn-sm btn-default\" data-toggle=\"modal\">\n" +
    "                    <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "                </button>\n" +
    "            </div>\n" +
    "            <div class=\"pronoun-item\"><span class='kunyomi-text'>Bộ: </span><span>{{ data.kanji }} - {{ data.mean }}</span></div>\n" +
    "            <div class=\"pronoun-item japanese-char\" ng-if=\"data.kun != null && data.kun != ''\"><span class='kunyomi-text'>訓:</span>  <span ng-bind-html=\"data.kun\"></span></div>\n" +
    "            <div class=\"pronoun-item japanese-char\" ng-if=\"data.on != null && data.on != ''\"><span class='kunyomi-text'>音:</span> <span ng-bind-html=\"data.on\"> </span></div>\n" +
    "            <div class=\"pronoun-item\" ng-if=\"data.stroke_count != null\"><span class='kunyomi-text'>Số nét:</span> {{ data.stroke_count }} </div>\n" +
    "            <div class=\"level\" ng-if=\"data.level != null\"><span class='kunyomi-text'>JLPT:</span> {{ data.level }}</div>\n" +
    "            <div class=\"comp-detail\" ng-if=\"data.compDetail != null\"><span class='kunyomi-text'>Bộ thành phần: </span>\n" +
    "                <span class=\"kanji-component\" ng-repeat=\"cd in data.compDetail\">\n" +
    "                    {{ cd.w }} <span ng-if=\"cd.h != null && cd.h != ''\"> {{ cd.h }}</span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div class=\"short-mean\"><span class='kunyomi-text'>Nghĩa: </span>\n" +
    "    		\n" +
    "                {{ getTitle() }}\n" +
    "                <ul class=\"list-collapse\">\n" +
    "                    <span class='kunyomi-text'>Giải nghĩa: </span> \n" +
    "                    <li ng-repeat=\"mean in getDetails()\">\n" +
    "                        {{ mean }}\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "                <p ng-if=\"collapse\"  ng-click=\"showCollapse()\" class=\"button-collapse\">\n" +
    "                    <i class=\"fa fa-angle-double-up fa-lg\"></i>\n" +
    "                </p>\n" +
    "                <p ng-if=\"!collapse\"  ng-click=\"showCollapse()\" class=\"button-collapse\">\n" +
    "                    <i class=\"fa fa-angle-double-down fa-lg\"></i>                    \n" +
    "                </p>\n" +
    "\n" +
    "            </div>\n" +
    "            <!--<ng-report data=\"data\" type=\"kanji\"></ng-report>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6 col-xs-12\">\n" +
    "        <div class=\"kanji-draw widget-container\">\n" +
    "            <ng-kanji-draw data=\"data.kanji\"></ng-kanji-draw>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"example-kanji widget-container col-md-12\">\n" +
    "        <b>Ví dụ:</b>\n" +
    "        <table class=\"table\">\n" +
    "            <thead>\n" +
    "              <tr>\n" +
    "                <th class=\"table-col-1\">#</th>\n" +
    "                <th class=\"table-col-2\">Từ</th>\n" +
    "                <th class=\"table-col-3\">Hiragana</th>\n" +
    "                <th class=\"table-col-4 td-hidden\">Hán Việt</th>\n" +
    "                <th class=\"table-col-5\">Nghĩa</th>\n" +
    "              </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"exam in data.examples\">\n" +
    "                    <td class=\"table-col-1\">{{ $index + 1 }}</td>\n" +
    "                    <td class=\"table-col-2\" ng-click=\"search(exam.w)\" class=\"japanese-char\">{{ exam.w }}</td>\n" +
    "                    <td class=\"table-col-3\" class=\"japanese-char\">{{ exam.p }}</td>\n" +
    "                    <td class=\"table-col-4 td-hidden\">{{ exam.h }}</td>\n" +
    "                    <td class=\"table-col-5\">{{ exam.m }}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<ng-note-content></ng-note-content>\n" +
    "<ng-category></ng-category>\n" +
    "");
}]);

angular.module("components/mazii-qa/mazii-qa-directive.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/mazii-qa/mazii-qa-directive.html",
    "<div class=\"box-notify-mean\">\n" +
    "	<div class=\"title\">Hỏi và đáp</div>\n" +
    "	<div class=\"main\">\n" +
    "		<div class=\"item-mean\" ng-repeat=\"quest in data\">\n" +
    "			<p>\n" +
    "				<a href=\"{{ quest.url }}\" target=\"_blank\"><span ng-bind-html=\"quest.title_plain\" /></a>\n" +
    "			</p> \n" +
    "			<p class=\"user\">{{ quest.author.name }} đang hỏi\n" +
    "			</p>\n" +
    "		</div>\n" +
    "		\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("components/newreport/newreport-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/newreport/newreport-template.html",
    "<div class=\"box-notify-mean\">\n" +
    "	<div class=\"title\">Các bạn đang góp ý</div>\n" +
    "	<div class=\"main\">\n" +
    "		<div class=\"item-mean\" ng-repeat=\"newMean in listNewMean\">\n" +
    "			<p>\n" +
    "				<b class=\"mean\">\n" +
    "					<a ng-click=\"directToFeedback(newMean.word)\">{{ newMean.word }}</a>\n" +
    "				</b> : {{ newMean.mean }}\n" +
    "			</p> \n" +
    "			<p class=\"user\">{{ newMean.username }} đã góp ý \n" +
    "				<span class=\"user\" title=\"{{convertTime(newMean.created_at)}}\"></span>\n" +
    "			</p>\n" +
    "		</div>\n" +
    "		\n" +
    "	</div>\n" +
    "	<div class=\"next\">\n" +
    "		<a ng-click=\"nextSkip()\">{{ valNext }}</a>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("components/news/newsother-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/news/newsother-template.html",
    "<div class=\"older-news widget-container japanese-char\">\n" +
    "    <div class=\"news-title\">他のニュース</div>\n" +
    "    <hr class=\"other-news-hr-heading\">\n" +
    "	<div class=\"news-link\">\n" +
    "	    <a id=\"{{newsLink.value.id}}\" class=\"links-news-title\" ng-click=\"changeDetailNews(newsLink.id);\" ng-repeat=\"newsLink in lastestNews track by $index\" ng-class=\"getNewsReadClass(newsLink.value.id);\" >\n" +
    "	        <p ng-bind-html=\"newsLink.value.title\"></p>\n" +
    "	    </a>\n" +
    "	</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/notes/category-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/notes/category-template.html",
    "<div id=\"myCategory\" class=\"modal fade\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog modal-sm\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">Tạo nhóm từ</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "		    	<input type=\"text\" name=\"text\" class=\"form-control\" ng-model=\"nameCategory\" maxlength=\"100\"\n" +
    "                placeholder=\"Nhập nhóm cần lưu\" ng-enter=\"saveCategory(nameCategory);\"/>\n" +
    "			</div>\n" +
    "			<div class=\"modal-footer\">\n" +
    "			    <button type=\"button\" class=\"btn btn-primary\"  ng-click=\"saveCategory(nameCategory);\">Tạo</button>\n" +
    "			    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n" +
    "			</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("components/notes/note-content-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/notes/note-content-template.html",
    "<div id=\"myNote\" class=\"modal fade\" role=\"dialog\">\n" +
    "    <div class=\"modal-dialog modal-sm\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">Thêm từ vào</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <div class=\"content\" ng-if=\"category.length != 0\">\n" +
    "				    <div class=\"history-item\"  ng-repeat=\"item in category.slice().reverse() track by $index\">\n" +
    "				        <div class=\"his-content\" ng-click=\"saveNoteMe(item.categoryId)\">\n" +
    "                            {{ item.categoryName }}\n" +
    "                        </div>\n" +
    "				        <!--<div class=\"his-time\">{{ getTime(item.date) }}</div>-->\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "                <div ng-if=\"category.length == 0\">\n" +
    "                    Bạn chưa tạo nhóm từ nào\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <!-- <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-toggle=\"modal\" data-target=\"#myCategory\">Tạo mới</button> -->\n" +
    "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"showMyCategoryModal()\" data-target=\"#myCategory\">Tạo mới</button>\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/notes/note-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/notes/note-template.html",
    "<div class=\"note-content-block col-md-7\">\n" +
    "	<div class=\"widget-container\" ng-if=\"note.length != 0\">\n" +
    "		<div class=\"news-title\">\n" +
    "		    <div class=\"note-edit-content\">\n" +
    "                <button class='btn btn-default' ng-click=\"showEditNote()\">\n" +
    "                    <span class=\"glyphicon glyphicon-edit\"></span>\n" +
    "                </button>\n" +
    "            </div>\n" +
    "		</div>\n" +
    "		<hr class=\"note-hr-heading\">\n" +
    "		<div class=\"note-item\" ng-if=\"note\" ng-repeat=\"item in note.slice().reverse() track by $index\">\n" +
    "			<div ng-if=\"item.type != 'grammar_detail'\">\n" +
    "				<div ng-click=\"search(item.type, item.name);\">\n" +
    "			    	<div class=\"history-type\" value=\"{{ item.type[0] }}\"> {{ item.type[0] }} </div>\n" +
    "			    	<div class=\"note-content\">{{ item.name }}</div>\n" +
    "			    	<div class=\"note-mean\" ng-if=\"item.mean != 'null' && item.mean != null\">{{ item.mean }}</div>\n" +
    "			    	<!--<div class=\"note-time\">{{ getTime(item.date) }}</div>-->\n" +
    "				</div>\n" +
    "			    <button class=\"btn btn-default btn-sm note-delete\" ng-class=\"getDeleteState()\" ng-click=\"deleteNote(item.id)\">\n" +
    "			    	<span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "			    </button>\n" +
    "			</div>\n" +
    "			<div ng-if=\"item.type == 'grammar_detail'\">\n" +
    "				<div ng-click=\"search('grammarDetail', item.idx);\">\n" +
    "			    	<div class=\"history-type\" value=\"{{ item.type[0] }}\"> {{ item.type[0] }} </div>\n" +
    "			    	<div class=\"note-content\">{{ item.name }}</div>\n" +
    "			    	<div class=\"note-mean\" ng-bind-html=\"item.mean\"></div>\n" +
    "			    	<!--<div class=\"note-time\">{{ getTime(item.date) }}</div>-->\n" +
    "				</div>\n" +
    "			    <button class=\"btn btn-default btn-sm note-delete\" ng-class=\"getDeleteState()\" ng-click=\"deleteNote(item.id)\">\n" +
    "			    	<span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "			    </button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-if=\"note.length == 0\">\n" +
    "		Không có từ trong nhóm.\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("components/notify/notify-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/notify/notify-template.html",
    "<p><b>Có thể bạn chưa biết:</b></p>\n" +
    "<p>- Tra cứu âm katakana: viết hoa những chữ đó, ví dụ: BETONAMU</p>\n" +
    "<p>- Tra cứu tiếng Việt không dấu: nhập vào ô tìm kiếm và bấm vào dòng đầu tiên của phần gợi ý.</p>\n" +
    "<p>- Đăng nhập tài khoản Mazii, bạn sẽ được đồng bộ dữ liệu để sử dụng trên nhiều thiết bị.</p>");
}]);

angular.module("components/report/report-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/report/report-template.html",
    "<span class=\"report-wrong\" ng-click=\"showReportDialog();\">Báo sai!</span>");
}]);

angular.module("components/review/review-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/review/review-template.html",
    "<div class=\"widget\">\n" +
    "    <div class=\"content\">\n" +
    "        \n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/setting/setting-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/setting/setting-template.html",
    "<div class=\"setting-screen\">\n" +
    "    <div class=\"title-setting\">Tùy chỉnh</div><hr>\n" +
    "    <div class=\"content\">\n" +
    "        <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\" ng-change=\"showFurigana()\" ng-model=\"furigana\">\n" +
    "                <span>Hiện furigana (chữ hiragana nhỏ nằm trên chữ kanji)</span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"checkbox\">\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\" ng-change=\"showSuggestSearch()\" ng-model=\"suggest\">\n" +
    "                <span>Bật tính năng gợi ý tìm kiếm</span>\n" +
    "            </label>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/survay/survay-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/survay/survay-template.html",
    "<div class=\"modal fade\" id=\"survayModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"survayModal\">\n" +
    "  <div class=\"modal-dialog\" role=\"document\">\n" +
    "    <form name=\"formSurvay\">\n" +
    "      <div class=\"modal-content\">\n" +
    "        <div class=\"modal-header\">\n" +
    "          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "          <h4 class=\"modal-title\" id=\"survayModal\">\n" +
    "            Góp ý <span ng-if=\"showThankSurvay\">- cảm ơn bạn đã gửi góp ý</span>\n" +
    "          </h4>\n" +
    "        </div>\n" +
    "        <div class=\"modal-body\">\n" +
    "          <p class=\"question\">\n" +
    "            {{ survay.question }}\n" +
    "          </p>\n" +
    "          \n" +
    "          <!-- Câu hỏi loại choice -->\n" +
    "          <div class=\"answer\" ng-if=\"survay.type == 0\">\n" +
    "            <div class=\"answer-choice\">\n" +
    "              <div class=\"radio\">\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"choicequestion\" ng-model=\"form.radio\" value=\"yes\" checked=\"checked\">\n" +
    "                  Có\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"answer-choice\">\n" +
    "              <div class=\"radio\">\n" +
    "                <label>\n" +
    "                  <input type=\"radio\" name=\"choicequestion\"  ng-model=\"form.radio\" value=\"no\">\n" +
    "                  Không\n" +
    "                </label>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          \n" +
    "          <!-- Câu hỏi nhiều lựa chọn -->\n" +
    "          <div class=\"answer-mutil-choice\" ng-if=\"survay.type == 1\">\n" +
    "            <div class=\"checkbox answer-mutil-choice\" ng-repeat=\"answer in survay.answer\">\n" +
    "              <label>\n" +
    "                <input type=\"checkbox\" value=\"{{answer}}\">\n" +
    "                {{ answer }}\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          \n" +
    "          <!-- Câu hỏi nêu ý kiến -->\n" +
    "          <div class=\"answer\" ng-if=\"survay.type == 2\">\n" +
    "            <textarea name=\"comment\" class=\"form-control\" rows=\"4\" required placeholder=\"Góp ý\" ng-model=\"form.comment\"></textarea>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"modal-footer\">\n" +
    "          <button type=\"button\" class=\"btn btn-default btn-close-survay\" data-dismiss=\"modal\">\n" +
    "            Đóng\n" +
    "          </button>\n" +
    "          <button type=\"button\" class=\"btn btn-primary btn-send-survay\"\n" +
    "           ng-click=\"answerSurvay(survay)\" ng-disabled=\"!formSurvay.$valid\">\n" +
    "            Gửi ý kiến\n" +
    "          </button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/synonyms/synonyms-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/synonyms/synonyms-template.html",
    "<div class=\"synonyms-result word-detail-content\" ng-if=\"data.synsets != null\">\n" +
    "    <div class=\"synonyms-header\">Từ đồng nghĩa của <b> {{ data.synsets[0].base_form }} </b></div>\n" +
    "    <div class=\"synonyms-word-type\" ng-if=\"data.synsets[0].pos != null\"> {{ data.synsets[0].pos }} </div>\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"entry in data.synsets[0].entry\">\n" +
    "            <span class=\"synonyms-word\" ng-repeat=\"synonym in entry.synonym\" ng-click=\"searchThis(synonym);\">\n" +
    "                {{ synonym }}<span ng-if=\"$index < entry.synonym.length - 1\">, </span>\n" +
    "            </span>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    " </div>");
}]);

angular.module("components/verb-conjugtion/verb-conjugtion-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/verb-conjugtion/verb-conjugtion-template.html",
    "<div class=\"verb-conjugation-container\">\n" +
    "    <div class=\"verb-title\">Bảng chia động từ: </div>\n" +
    "    <table class=\"verb-conjugation\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th class=\"form-column\">Tên thể (形)</th>\n" +
    "            <th class=\"word-column\">Từ</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr ng-repeat=\"(key, value) in data\">\n" +
    "            <td class=\"form-column\"> {{value.name}} </td>\n" +
    "            <td class=\"word-column japanese-char\"> {{value.word}} </td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>");
}]);

angular.module("components/word-ja/word-ja.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/word-ja/word-ja.html",
    "<div class=\"word-container widget-container\" ng-repeat=\"item in dataWordJa\"> \n" +
    "    <div class=\"main-word main-word-ja\">\n" +
    "        {{ item.word }}\n" +
    "       \n" +
    "    </div>  \n" +
    "     \n" +
    "    <div class=\"phonetic-word japanese-char word-ja-phonetic\" ng-if=\"item.phonetic != null && item.phonetic != '' && item.phonetic.length < 20\">\n" +
    "        {{ item.phonetic }}\n" +
    "    </div> \n" +
    "    <div class=\"add-note-me\">\n" +
    "        <button ng-click=\"setQueryType(item.word, 'word', item);\" class=\"btn btn-sm btn-default\" data-toggle=\"modal\">\n" +
    "            <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "        </button>\n" +
    "    </div> \n" +
    "\n" +
    "    <div class=\"mean-detail-range\" >\n" +
    "        <div ng-bind-html=\"itemMean \" class=\"word_ja\" ng-repeat=\"itemMean in item.means\">  </div> \n" +
    "    </div>      \n" +
    "    <div class=\"gogl-word-search-helper\"> Từ điển Nhật - Nhật </span>\n" +
    "</div>\n" +
    " ");
}]);

angular.module("components/word/word-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/word/word-template.html",
    "<div class=\"word-container widget-container\">\n" +
    "    <div class=\"main-word\">\n" +
    "        {{ ::data.word }}\n" +
    "       \n" +
    "    </div>\n" +
    "    <i class=\"audio-word fa fa-volume-down fa-lg\" ng-click=\"playAudio()\"></i>\n" +
    "    <div class=\"add-note-me\">\n" +
    "        <button ng-click=\"setQueryType(data.word, 'word', data);\" class=\"btn btn-sm btn-default\"data-toggle=\"modal\">\n" +
    "            <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "        </button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"phonetic-word japanese-char\" ng-if=\"data.phonetic != null && data.phonetic != '' && data.phonetic.length < 20\">\n" +
    "        {{ ::data.phonetic }}\n" +
    "    </div> \n" +
    "    <div class=\"sound-button\" ng-click=\"playSound(data.word);\"></div>\n" +
    "    <div class=\"han-viet-word\" ng-if=\"amHanViet != null && amHanViet != ''\">\n" +
    "        「{{ ::amHanViet }}」\n" +
    "    </div>\n" +
    "    <div class=\"mean-detail-range\" ng-repeat=\"mean in data.noKinds\">\n" +
    "        <div class=\"type-word\" ng-if=\"mean.kind != null && mean.kind != ''\">☆ {{ convertKindToReadable(mean.kind) }} </div>\n" +
    "        <div class=\"mean-fr-word\">◆ {{ capitaliseFirstLetter(mean.mean) }} </div>\n" +
    "        <div class=\"example-range\">\n" +
    "            <ng-example ng-repeat=\"exam in mean.examples\"  data=\"exam\"></ng-example>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"mean-detail-range\" ng-repeat=\"(kind, means) in data.kinds\">\n" +
    "        <div class=\"type-word\">☆ {{ convertKindToReadable(kind) }} </div>\n" +
    "        <div ng-repeat=\"(index, mean) in means\">\n" +
    "            <div class=\"mean-fr-word\">◆ {{ capitaliseFirstLetter(mean.mean) }} </div>\n" +
    "            \n" +
    "            <div class=\"example-range\">\n" +
    "                <ng-example ng-repeat=\"exam in mean.examples\"  data=\"exam\"></ng-example> \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>          \n" +
    "</div>\n" +
    "<ng-feedback  data=\"{ id : data.mobileId == null ? data._id : data.mobileId, word : data.word }\"></ng-feedback>\n" +
    "\n" +
    "<!--dat o day-->\n" +
    "<ng-word-ja  data=\"data.word\"> </ng-word-ja>\n" +
    "\n" +
    "<div class=\"word-container widget-container\" ng-if=\"aux != null\">\n" +
    "    <div class=\"main-word\">\n" +
    "        {{ ::aux.entity }}\n" +
    "    </div>\n" +
    "    <div class=\"mean-detail-range\">\n" +
    "        <div class=\"type-word\">{{ NameCategory }} </div>\n" +
    "        <div class=\"example-range\">\n" +
    "            {{ ::aux.def }}\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"feedback\">\n" +
    "      <ng-check-category-modal> </ng-check-category-modal>\n" +
    "    </div>\n" +
    "    <div class=\"gogl-word-search-helper\">[提供元：株式会社オルツ拡張固有表現認識API <span ng-if=\"aux.def != null && aux.def != ''\">(エンティティ定義：<a href=\"https://ja.wikipedia.org/wiki/{{ ::aux.entity }}\" target=\"_blank\">Wikipedia</a>)</span>]</div>\n" +
    "</div>\n" +
    "<div class=\"widget-container\" ng-if=\"conjugationVerb\">\n" +
    "    <ng-verb-conjugtion data=\"conjugationVerb\"></ng-verb-conjugtion>\n" +
    "</div>\n" +
    "<ng-note-content></ng-note-content>\n" +
    "<ng-category></ng-category>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "    $(document).ready(function(){\n" +
    "    $('[data-toggle=\"tooltip\"]').tooltip();   \n" +
    "    });\n" +
    "</script>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);
