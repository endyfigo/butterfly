KISSY.add("gallery/form/1.1/uploader/themes/imageUploader/index",function(f,h,i,j,k,l){function g(a){g.superclass.constructor.call(this,a)}var e=h.all;f.extend(g,i,{afterUploaderRender:function(a){var b=new k,c=this.get("queue");this.set("preview",b);this._maxHideBtn(a);this._renderFiledrop();c.on("add",this._queueAddHandler,this)},_getStatusWrapper:function(a){return a.children(".J_FileStatus")},_renderFiledrop:function(){var a=this.get("button").get("target");a=new l({target:a,uploader:this.get("uploader"),
tpl:{supportDrop:'<div class="drop-wrapper"></div>'}});a.render();return a},_waitingHandler:function(a){var b=this.get("preview"),c=a.file,d=c.input;c=e(".J_Pic_"+c.id);b&&d&&c.length&&b.preview(a.file.input,c)},_startHandler:function(a){var b=a.uploader,c=a.index,d=this.get("queue");b=b.get("type");a=e(".J_ProgressBar_"+a.id);if(b=="ajax"||b=="flash"){a=new j(a);a.render();this.set("progressBar",a);d.updateFile(c,{progressBar:a})}},_progressHandler:function(a){var b=a.file.progressBar;if(!b)return false;
b.set("value",Math.ceil(a.loaded/a.total)*100)},_successHandler:function(a){var b=a.file.result;this._setCount();b&&this._changeImageSrc(a.id,b);this._setDisplayMsg(false,a.file)},_errorHandler:function(a){var b=a.msg;e(".J_ErrorMsg_"+a.id).html(b);this._setDisplayMsg(true,a.file);f.log(b)},_setCount:function(){var a=e(this.get("elCount")),b=this.getFilesLen(),c=this.get("auth");if(!a.length||!c)return false;c=c.get("rules").max;if(!c)return false;a.text(c[0]-b)},_setDisplayMsg:function(a,b){if(!b)return false;
var c=e(".J_Mask_"+b.id),d=b.statusWrapper;c[a&&"show"||"hide"]();if(a){c.show();d.show()}else{c.hide();d.hide()}},_maxHideBtn:function(a){this.get("auth").on("error",function(b){b=b.rule;var c=a.get("button"),d=c.get("target");if(b=="max"){c.hide();d.parent("li").hide()}})},_queueAddHandler:function(a){var b=a.file;a=a.target;var c=e(".J_Del_"+b.id),d=e(".J_Mask_"+b.id);a.on("mouseover mouseout",function(m){if(m.type=="mouseover"){c.show();d.show()}else{c.hide();d.hide()}});c.data("data-file",b);
c.on("click",this._delHandler,this)},_delHandler:function(a){var b=this.get("uploader"),c=this.get("queue");a=e(a.target).data("data-file");c=c.getFileIndex(a.id);a=a.status;if(a=="start"||a=="progress")b.cancel(c)},getFilesLen:function(a){a||(a="success");return this.get("queue").getFiles(a).length},_changeImageSrc:function(a,b){var c=b.data,d=e(".J_Pic_"+a);if(!f.isObject(c))return false;c=c.url;if(d.attr("src")==""||f.UA.ie==8)d.attr("src",c)}},{ATTRS:{name:{value:"imageUploader"},isUseCss:{value:true},
cssUrl:{value:"gallery/form/1.1/uploader/themes/imageUploader/style.css"},fileTpl:{value:'<li id="queue-file-{id}" class="clearfix" data-name="{name}"><div class="tb-pic120"><a href="javascript:void(0);"><img class="J_Pic_{id}" src="" /></a></div><div class=" J_Mask_{id} pic-mask"></div><div class="status-wrapper J_FileStatus"><div class="status waiting-status tips-upload-waiting"><p class="tips-text">等待上传，请稍候</p></div><div class="status start-status progress-status tips-uploading"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>上传中...</div></div><div class="status success-status tips-upload-success">上传成功！</div><div class="status error-status tips-upload-error"><p class="J_ErrorMsg_{id} tips-text">上传失败，请重试！</p></div></div><a class="J_Del_{id} del-pic" href="#">删除</a></li>'},
elCount:{value:"#J_UploadCount"}}});return g},{requires:["node","../../theme","../../plugins/progressBar/progressBar","../../plugins/preview/preview","../../plugins/filedrop/filedrop"]});