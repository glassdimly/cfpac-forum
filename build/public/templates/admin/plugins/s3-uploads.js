!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,e,n,r,a){return'<h1><i class="fa fa-picture-o"></i> S3 Uploads Configuration</h1>\r\n<hr/>\r\n\r\n<p>You can configure this plugin via a combination of the below, for instance, you can use <em>instance meta-data</em>\r\n\tand <em>environment variables</em> in combination. You can also specify values in the form below, and those will be\r\n\tstored in the database.</p>\r\n\r\n<h3>Environment Variables</h3>\r\n<pre><code>export AWS_ACCESS_KEY_ID="xxxxx"\r\nexport AWS_SECRET_ACCESS_KEY="yyyyy"\r\nexport S3_UPLOADS_BUCKET="zzzz"\r\nexport S3_UPLOADS_HOST="host"\r\nexport S3_UPLOADS_PATH="path"\r\n</code></pre>\r\n\r\n<p>\r\n\tAsset host and asset path are optional. You can leave these blank to default to the standard asset url -\r\n\thttp://mybucket.s3.amazonaws.com/uuid.jpg.<br/>\r\n\tAsset host can be set to a custom asset host. For example, if set to cdn.mywebsite.com then the asset url is\r\n\thttp://cdn.mywebsite.com/uuid.jpg.<br/>\r\n\tAsset path can be set to a custom asset path. For example, if set to /assets, then the asset url is\r\n\thttp://mybucket.s3.amazonaws.com/assets/uuid.jpg.<br/>\r\n\tIf both are asset host and path are set, then the url will be http://cdn.mywebsite.com/assets/uuid.jpg.\r\n</p>\r\n\r\n<h3>Instance meta-data</h3>\r\n<p>This plugin is compatible with the instance meta-data API, you\'ll need to setup role delegation for this to work. See\r\n\tthe following links:</p>\r\n<ul>\r\n\t<li><a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html">EC2 Documentation:\r\n\t\tInstance Metadata and User Data</a></li>\r\n\t<li><a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-assume-role.html">IAM Documentation: Assuming a\r\n\t\tRole</a></li>\r\n\t<li><a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/role-usecase-ec2app.html">IAM Documentation: EC2 Role\r\n\t\tExample</a></li>\r\n\t<li><a href="http://docs.aws.amazon.com/STS/latest/UsingSTS/sts_delegate.html">STS Documentation: Delegation</a>\r\n\t</li>\r\n</ul>\r\n<div class="alert alert-warning">\r\n\t<p>If you need help, create an <a href="https://github.com/LewisMcMahon/nodebb-plugin-s3-uploads/issues/">issue on\r\n\t\tGithub</a>.</p>\r\n</div>\r\n\r\n<h3>Database Stored configuration:</h3>\r\n<form id="s3-upload-bucket">\r\n\t<label for="s3bucket">Bucket</label><br/>\r\n\t<input type="text" id="s3bucket" name="bucket" value="'+t.__escape(n(e&&e.bucket))+'" title="S3 Bucket" class="form-control input-lg"\r\n\t       placeholder="S3 Bucket"><br/>\r\n\r\n\t<label for="s3host">Host</label><br/>\r\n\t<input type="text" id="s3host" name="host" value="'+t.__escape(n(e&&e.host))+'" title="S3 Host" class="form-control input-lg"\r\n\t       placeholder="website.com"><br/>\r\n\r\n\t<label for="s3path">Path</label><br/>\r\n\t<input type="text" id="s3path" name="path" value="'+t.__escape(n(e&&e.path))+'" title="S3 Path" class="form-control input-lg"\r\n\t       placeholder="/assets"><br/>\r\n\r\n\t<label for="aws-region">Region</label><br/>\r\n\t<select id="aws-region" name="region" title="AWS Region" class="form-control">\r\n\t\t<option value="">..</option>\r\n\t\t<option value="us-east-1">Standard (us-east-1)</option>\r\n\t\t<option value="us-west-1">N. California (us-west-1)</option>\r\n\t\t<option value="us-west-2">Oregon (us-west-2)</option>\r\n\t\t<option value="ca-central-1">Canada (ca-central-1)</option>\r\n\t\t<option value="eu-west-1">Ireland (eu-west-1)</option>\r\n\t\t<option value="eu-west-2">London (eu-west-2)</option>\r\n\t\t<option value="eu-central-1">Frankfurt (eu-central-1)</option>\r\n\t\t<option value="ap-northeast-1">Tokyo (ap-northeast-1)</option>\r\n\t\t<option value="ap-northeast-2">Seoul (ap-northeast-2)</option>\r\n\t\t<option value="ap-southeast-1">Singapore (ap-southeast-1)</option>\r\n\t\t<option value="ap-southeast-2">Sydney (ap-southeast-2)</option>\r\n\t\t<option value="ap-south-1">Mumbai (ap-south-1)</option>\r\n\t\t<option value="sa-east-1">São Paulo (sa-east-1)</option>\r\n\t</select>\r\n\t<br/>\r\n\r\n\t<button class="btn btn-primary" type="submit">Save</button>\r\n</form>\r\n\r\n<br><br>\r\n<form id="s3-upload-credentials">\r\n\t<label for="bucket">Credentials</label><br/>\r\n\t<div class="alert alert-warning">\r\n\t\tConfiguring this plugin using the fields below is <strong>NOT recommended</strong>, as it can be a potential\r\n\t\tsecurity issue. We highly recommend that you investigate using either <strong>Environment Variables</strong> or\r\n\t\t<strong>Instance Meta-data</strong>\r\n\t</div>\r\n\t<input type="text" name="accessKeyId" value="'+t.__escape(n(e&&e.accessKeyId))+'" maxlength="20" title="Access Key ID"\r\n\t       class="form-control input-lg" placeholder="Access Key ID"><br/>\r\n\t<input type="text" name="secretAccessKey" value="'+t.__escape(n(e&&e.secretAccessKey))+'" title="Secret Access Key"\r\n\t       class="form-control input-lg" placeholder="Secret Access Key"><br/>\r\n\t<button class="btn btn-primary" type="submit">Save</button>\r\n</form>\r\n\r\n<script>\r\n\t$(document).ready(function () {\r\n\r\n\t\t$(\'#aws-region option[value="'+t.__escape(n(e&&e.region))+'"]\').prop(\'selected\', true)\r\n\r\n\t\t$("#s3-upload-bucket").on("submit", function (e) {\r\n\t\t\te.preventDefault();\r\n\t\t\tsave("s3settings", this);\r\n\t\t});\r\n\r\n\t\t$("#s3-upload-credentials").on("submit", function (e) {\r\n\t\t\te.preventDefault();\r\n\t\t\tvar form = this;\r\n\t\t\tbootbox.confirm("Are you sure you wish to store your credentials for accessing S3 in the database?", function (confirm) {\r\n\t\t\t\tif (confirm) {\r\n\t\t\t\t\tsave("credentials", form);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\r\n\t\tfunction save(type, form) {\r\n\t\t\tvar data = {\r\n\t\t\t\t_csrf: \''+t.__escape(n(e&&e.csrf))+"' || $('#csrf_token').val()\r\n\t\t\t};\r\n\r\n\t\t\tvar values = $(form).serializeArray();\r\n\t\t\tfor (var i = 0, l = values.length; i < l; i++) {\r\n\t\t\t\tdata[values[i].name] = values[i].value;\r\n\t\t\t}\r\n\r\n\t\t\t$.post('"+t.__escape(n(e&&e.forumPath))+"api/admin/plugins/s3-uploads/' + type, data).done(function (response) {\r\n\t\t\t\tif (response) {\r\n\t\t\t\t\tajaxify.refresh();\r\n\t\t\t\t\tapp.alertSuccess(response);\r\n\t\t\t\t}\r\n\t\t\t}).fail(function (jqXHR, textStatus, errorThrown) {\r\n\t\t\t\tajaxify.refresh();\r\n\t\t\t\tapp.alertError(jqXHR.responseJSON ? jqXHR.responseJSON.error : 'Error saving!');\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n<\/script>\r\n"}});