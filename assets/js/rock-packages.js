class Manifest {

    constructor()
    {
        this.name = ""
        this.description = ""
        this.brief_description = ""
        this.maintainers = []
        this.authors = []
        this.url = ""
        this.logo = ""
        this.copyright = ""
        this.license =""
        this.dependencies = {}
        this.tags = []
    }

    getOptionalDependencies() {
        var optional_deps = []
        for(var dependency in this.dependencies)
        {
            if(this.dependencies[dependency])
            {
                optional_deps.push(dependency);
            }
        }
        return optional_deps;
    }

    getMandatoryDependencies() {
        var mandatory_deps = []
        for(var dependency in this.dependencies)
        {
            if(!this.dependencies[dependency])
            {
                mandatory_deps.push(dependency);
            }
        }
        return mandatory_deps;
    }

    static getText(doc, tag) {
        var elements = doc.getElementsByTagName(tag)
        if(elements.length > 0)
        {
            return elements[0].textContent.trim()
        } else {
            return ""
        }
    }

    static fromXML(doc)
    {
        var m = new Manifest()
        m.name = Manifest.getText(doc, "name")

        var descriptionXML = doc.getElementsByTagName("description")
        if(descriptionXML.length > 0) {
            m.description = descriptionXML[0].textContent
            m.brief_description = descriptionXML[0].getAttribute("brief")
        }

        var maintainersXML = doc.getElementsByTagName("maintainer")
        for(var i = 0; i < maintainersXML.length; ++i)
        {
            m.maintainers.push(maintainersXML[i].textContent)
        }

        var authorsXML = doc.getElementsByTagName("author")
        for(var i = 0; i < authorsXML.length; ++i)
        {
            m.authors.push(authorsXML[i].textContent)
        }

        m.url = Manifest.getText(doc, "url")
        m.logo = Manifest.getText(doc, "logo")
        m.copyright = Manifest.getText(doc, "copyright")
        m.license = Manifest.getText(doc, "license")

        var dependXML = doc.getElementsByTagName("depend")
        for(var i = 0; i < dependXML.length; ++i)
        {
            name = dependXML[i].getAttribute("package")
            var optional = false
            var attrOptional = dependXML[i].getAttribute("optional")
            if(attrOptional == "1")
            {
                optional = true
            }
            m.dependencies[name] = optional
        }
        return m
    }

    static fromURL(url)
    {
        try {
            var query = new XMLHttpRequest()
            query.open("GET", url, false)
            query.send()
            if(query.status === 200)
            {
                    var doc = jQuery.parseXML(query.response)
                    return Manifest.fromXML(doc)
            }
        } catch(error) {
            console.error("Manifest retrieval failed for : " + url + error)
        }
        return null;
    }

    /**
     * Add a row consisting of key and pair columns to an existing
     * table
     */
    static addTableRow(table, keyValue, labelValue)
    {
        var rowIdx = table.rows.length

        var row = table.insertRow(rowIdx);
        var key = row.insertCell(0);
        var value = row.insertCell(1);
        // table data
        key.classList.add("pkg_content-td");
        key.classList.add("pkg_content-key");

        value.classList.add("pkg_content-td");
        value.classList.add("pkg_content-value");

        key.innerHTML = keyValue
        value.innerHTML = labelValue
    }

    static addDocumentTable(m, tableid, pkg)
    {
        var table = document.getElementById(tableid);
        if(table.rows.length > 0)
        {
            // Table is already loaded
            return;
        }

        this.addTableRow(table,
            "Github Org",
            pkg.organisation);

        if(!m) {

            var html = "<p>This package has no (or at least no valid) manifest, no further information available."
            html += " <a href=\"" + pkg.html_url + "\"> [&#8688; website]</a>"
            html += "</p>"
            this.addTableRow(table,
                "<p style=\"color:red\">Warning</p>",
                html
            );
            return;
        }

        if(m.brief_description)
        {
            this.addTableRow(table,
                "Brief Description",
                m.brief_description
            );
        }
        if(m.description)
        {
            this.addTableRow(table,
                "Description",
                m.description
            );
        }

        var authorSet = false;
        for(var author in m.authors)
        {
            if(!authorSet)
            {
                this.addTableRow(table, "Authors", m.authors[author]);
                authorSet = true
            } else {
                this.addTableRow(table, " ", m.authors[author]);
            }

        }

        var maintainerSet = false;
        for(var maintainer in m.maintainers)
        {
            if(!maintainerSet)
            {
                this.addTableRow(table, "Maintainers", m.maintainers[maintainer]);
                maintainerSet = true
            } else {
                this.addTableRow(table, "", m.maintainers[maintainer]);
            }
        }
        this.addTableRow(table, "Url", "<a href=\"" + pkg.html_url + "\">" + pkg.html_url + "</a>")
        this.addTableRow(table, "License", m.license)
        this.addTableRow(table, "Dependencies (mandatory)", m.getMandatoryDependencies().join(", "))
        var optional_deps = m.getOptionalDependencies()
        if(optional_deps.length > 0)
        {
            this.addTableRow(table, "Dependencies (optional)", m.getOptionalDependencies().join(", "))
        }
    }
}

class TestManifest {

    static testManifest(url) {
        m = Manifest.fromURL("https://raw.githubusercontent.com/rock-core/tools-apaka/master/manifest.xml")
        if(m) {
            console.log(m.dependencies)
        } else {
            console.log("Could not extract manifest")
        }
        return m
    }
}


/**
* Search packages via name using the input from the 'queryTxt' field
*/
function searchPackages()
{
    query = document.getElementById("queryTxt").value
    var re = new RegExp(".*" + query + ".*")
    var packages = JSON.parse(localStorage.getItem("rock-packages"))
    var filteredPackages = {}
    for(var key in packages)
    {
        if(key.search(re) == 0) {
            filteredPackages[key] = packages[key]
        }
    }

    var timestamp = localStorage.getItem("rock-packages-timestamp")
    renderPackageList(filteredPackages, timestamp)
}

/**
* Search packages via name using the input from the 'queryDescriptionTxt' field
*/
function searchDescriptionOfPackages()
{
    query = document.getElementById("queryDescriptionTxt").value
    var re = new RegExp(".*" + query + ".*","i")
    var packages = JSON.parse(localStorage.getItem("rock-packages"))
    var filteredPackages = {}
    for(var key in packages)
    {
        pkg = packages[key]
        if(pkg.description)
        {
            if(pkg.description.search(re) == 0) {
                filteredPackages[key] = packages[key]
            }
        }
    }

    var timestamp = localStorage.getItem("rock-packages-timestamp")
    renderPackageList(filteredPackages, timestamp)
}


/**
 * Render a package list using collapsible sections
 * Upon opening the manifest.xml information will be loaded if available
 */
function renderPackageList(packages, timestamp) {
    document.getElementById("package-cache-timestamp").innerHTML = "Last update: " + timestamp
    updateRateLimit()

    var sorted_packages = Object.values(packages).sort(function(a,b)
        {
            return a.name > b.name;
        });

    var html = ""
    for(var i = 0; i < sorted_packages.length; ++i)
    {
        pkg = sorted_packages[i]
        if(pkg)
        {
            html += "    <button type=\"button\" class=\"pkg_collapsible\"";
            //html += " id=\"" + pkg.full_name.replace("/","-") + "\""
            html += " name=\"" + pkg.full_name + "\">";
            html += pkg.name
            if(pkg.fork)
            {
                html += "    [forked repository see <a href=\"" + pkg.html_url + "\">website</a> for details]"
            }
            // Issue count seems to be incorrect - so not displaying
            //html += "    [Issues: " + pkg.open_issues_count + "]"
            //html += "        <a href=\"" + pkg.html_url + "\">[website &#8688;]</a>"
            if(pkg.description)
            {
                html += "    <div class=\"pkg_description\">";
                html += pkg.description;
                html += "    </div>\n";
            }
            html += "</button>\n"
            html += "    <div class=\"pkg_content\" id=\"" + pkg.full_name + "-content\">";

            tableid = "pkg_content-table-" + pkg.full_name.replace("/","-")
            html += "        <table class=\"pkg_content-table\" id=\"" + tableid + "\">\n";
            html += "        </table>";
            html += "    </div>"
        } else {
            console.log("'null' package for key '" + key + "'")
        }
    }
    document.getElementById('packages').innerHTML = html
    var coll = document.getElementsByClassName("pkg_collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        $(".pkg_collapsible").css("cursor", "wait");
        $(".pkg_description").css("cursor", "wait");

        // Construct the url for the given name
        pkg = packages[this.name]
        url = pkg.html_url
        url = url.replace("github.com","raw.githubusercontent.com")
        url += "/" + pkg.default_branch + "/manifest.xml"

        // Retrieve the manifest if available
        var m = Manifest.fromURL(url)
        var tableid = "pkg_content-table-" + pkg.full_name.replace("/","-")
        Manifest.addDocumentTable(m, tableid, pkg);

        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }

        $(".pkg_collapsible").css("cursor", "pointer");
        $(".pkg_description").css("cursor", "pointer");

      });
    }
}

function reloadPackageCache()
{
    var packages = {}
    localStorage.setItem("rock-packages",JSON.stringify(packages))
    loadPackages()
}

function updateRateLimit()
{
    var octokit = new Octokit()
    octokit.rateLimit.get().then(function(ratelimit)
        {
            sessionStorage.setItem("github-rate-limit-remaining", ratelimit.data.rate.remaining);
            document.getElementById("github-rate-limit").innerHTML = "Github API calls remaining for your IP: " + ratelimit.data.rate.remaining
        });
}

function getTimeStamp()
{
    return new Date().toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
}

/**
 * Load all repositories of known rock-repositories with the help of octokit
 * Store the result for the current session in the browser's localStorage
 * so we do not have to constantly query gitlab
 */
function loadPackages()
{
    var octokit = new Octokit()

    var packagesJSON = localStorage.getItem("rock-packages")
    if(packagesJSON)
    {
        var packages = JSON.parse(packagesJSON);
        if(Object.keys(packages).length > 0)
        {
            console.log("rock-packages read from browers localStorage");
            // Cache has already been populated
            var timestamp = localStorage.getItem("rock-packages-timestamp")
            renderPackageList(packages, timestamp)
            return;
        }
    }

    console.log("Loading rock-packages");
    var packages = {};
    var organisations = ["rock-core",
        "rock-bundles",
        "rock-control",
        "rock-data-processing",
        "rock-drivers",
        "rock-gui",
        "rock-knowledge-reasoning",
        "rock-multiagent",
        "rock-perception",
        "rock-planning",
        "rock-ros",
        "rock-simulation",
        "rock-slam"]

    for(var o = 0; o < organisations.length; o++) {
        var organisation = organisations[o];
        octokit.repos.
        listForOrg({
            org: organisation,
            type: "public",
            per_page: 100
        })
        .then(({data, header, status}) => {

            if(status === 200)
            {
                for(var i = 0; i < data.length; i++) {
                    pkg = data[i]
                    pkg["organisation"] = pkg.full_name.replace("/" + pkg.name,"")
                    packages[pkg.full_name] = pkg
                }
                octokit.rateLimit.get().then(function(ratelimit)
                    {
                        console.log("Requests (octokit) remaining to rate limit: " + ratelimit.data.rate.remaining);
                    });
                localStorage.setItem("rock-packages", JSON.stringify(packages))
                var timestamp = getTimeStamp()
                localStorage.setItem("rock-packages-timestamp", timestamp)

                renderPackageList(packages, timestamp)
            } else {
                console.error("octokit returned error status / failed to retrieve package information")
            }
        });
    }
}

