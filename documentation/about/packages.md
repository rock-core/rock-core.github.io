---
section: About Rock
title: Available Packages
---
{% comment %}
Example of the content of the retrieved package information via octokit:
archive_url: "https://api.github.com/repos/rock-core/autobuild/{archive_format}{/ref}"
archived: false
assignees_url: "https://api.github.com/repos/rock-core/autobuild/assignees{/user}"
blobs_url: "https://api.github.com/repos/rock-core/autobuild/git/blobs{/sha}"
branches_url: "https://api.github.com/repos/rock-core/autobuild/branches{/branch}"
clone_url: "https://github.com/rock-core/autobuild.git"
collaborators_url: "https://api.github.com/repos/rock-core/autobuild/collaborators{/collaborator}"
comments_url: "https://api.github.com/repos/rock-core/autobuild/comments{/number}"
commits_url: "https://api.github.com/repos/rock-core/autobuild/commits{/sha}"
compare_url: "https://api.github.com/repos/rock-core/autobuild/compare/{base}...{head}"
contents_url: "https://api.github.com/repos/rock-core/autobuild/contents/{+path}"
contributors_url: "https://api.github.com/repos/rock-core/autobuild/contributors"
created_at: "2008-04-15T11:58:38Z"
default_branch: "master"
deployments_url: "https://api.github.com/repos/rock-core/autobuild/deployments"
description: "Foundation to import and build software packages, basis for autoproj, Rock's (Robot Construction Kit) build system"
disabled: false
downloads_url: "https://api.github.com/repos/rock-core/autobuild/downloads"
events_url: "https://api.github.com/repos/rock-core/autobuild/events"
fork: false
forks: 13
forks_count: 13
forks_url: "https://api.github.com/repos/rock-core/autobuild/forks"
full_name: "rock-core/autobuild"
git_commits_url: "https://api.github.com/repos/rock-core/autobuild/git/commits{/sha}"
git_refs_url: "https://api.github.com/repos/rock-core/autobuild/git/refs{/sha}"
git_tags_url: "https://api.github.com/repos/rock-core/autobuild/git/tags{/sha}"
git_url: "git://github.com/rock-core/autobuild.git"
has_downloads: true
has_issues: true
has_pages: true
has_projects: true
has_wiki: true
homepage: "http://rock-robotics.org/stable/documentation/autoproj"
hooks_url: "https://api.github.com/repos/rock-core/autobuild/hooks"
html_url: "https://github.com/rock-core/autobuild"
id: 9980
issue_comment_url: "https://api.github.com/repos/rock-core/autobuild/issues/comments{/number}"
issue_events_url: "https://api.github.com/repos/rock-core/autobuild/issues/events{/number}"
issues_url: "https://api.github.com/repos/rock-core/autobuild/issues{/number}"
keys_url: "https://api.github.com/repos/rock-core/autobuild/keys{/key_id}"
labels_url: "https://api.github.com/repos/rock-core/autobuild/labels{/name}"
language: "Ruby"
languages_url: "https://api.github.com/repos/rock-core/autobuild/languages"
license: null
merges_url: "https://api.github.com/repos/rock-core/autobuild/merges"
milestones_url: "https://api.github.com/repos/rock-core/autobuild/milestones{/number}"
mirror_url: null
name: "autobuild"
node_id: "MDEwOlJlcG9zaXRvcnk5OTgw"
notifications_url: "https://api.github.com/repos/rock-core/autobuild/notifications{?since,all,participating}"
open_issues: 2
open_issues_count: 2
owner: Object { login: "rock-core", id: 6654878, node_id: "MDEyOk9yZ2FuaXphdGlvbjY2NTQ4Nzg=", … }
permissions: Object { admin: false, push: false, pull: true }
private: false
pulls_url: "https://api.github.com/repos/rock-core/autobuild/pulls{/number}"
pushed_at: "2019-11-28T18:33:03Z"
releases_url: "https://api.github.com/repos/rock-core/autobuild/releases{/id}"
size: 1870
ssh_url: "git@github.com:rock-core/autobuild.git"
stargazers_count: 10
stargazers_url: "https://api.github.com/repos/rock-core/autobuild/stargazers"
statuses_url: "https://api.github.com/repos/rock-core/autobuild/statuses/{sha}"
subscribers_url: "https://api.github.com/repos/rock-core/autobuild/subscribers"
subscription_url: "https://api.github.com/repos/rock-core/autobuild/subscription"
svn_url: "https://github.com/rock-core/autobuild"
tags_url: "https://api.github.com/repos/rock-core/autobuild/tags"
teams_url: "https://api.github.com/repos/rock-core/autobuild/teams"
trees_url: "https://api.github.com/repos/rock-core/autobuild/git/trees{/sha}"
updated_at: "2019-11-08T01:34:58Z"
url: "https://api.github.com/repos/rock-core/autobuild"
watchers: 10
watchers_count: 10
{% endcomment %}


<link rel="stylesheet" href="/css/rock-packages.css" type="text/css" />
<p>
The following list of packages is retrieved via Github API from Rock's organisations on github.
A rate limit applies for unauthenticated use, hence per default this page caches the results in the browser's local storage. 
For latest results you can force reloading.
</p>
<span id="package-cache-timestamp">
</span>
<button type="button" class="reload_button" id="reloadPackageCacheButton">Force Reload</button>
<div id ="github-rate-limit">
</div>

<h1>Search</h1>

<input type="text" id="queryTxt" placeholder="Search in names" />
<input type="text" id="queryDescriptionTxt" placeholder="Search in description" />

<div id="packages">
    ... retrieving package list ...
</div>

<script type="text/javascript" src="/assets/js/octokit-rest.min.js" ></script>
<script type="text/javascript" src="/assets/js/rock-packages.js" ></script>

<script>
function onPageLoad() {
    loadPackages();

    document.getElementById("queryTxt").addEventListener("input",searchPackages);
    document.getElementById("queryDescriptionTxt").addEventListener("input",searchDescriptionOfPackages);
    document.getElementById("reloadPackageCacheButton").addEventListener("click", reloadPackageCache);
}

window.onload = onPageLoad

</script>

