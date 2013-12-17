require 'webgen/tag'

class Vimeo
    include Webgen::Tag::Base

    def call(tag, body, context)
        id = param('vimeo.video_id')
        width = param('vimeo.width')
        height = param('vimeo.height')
        embed = param('vimeo.embed')
        iframe = %{<iframe src="http://player.vimeo.com/video/#{id}" width="#{width}" height="#{height}" frameborder="0" webkitAllowFullScreen="1" mozallowfullscreen="1" allowFullScreen="1">Vimeo Video</iframe>}
        if embed
            %{\n<p class="embed" style="width: #{width}px;" markdown="0">\n#{iframe}\n</p>\n}
        else
            iframe
        end
    end
end

class YouTube
    include Webgen::Tag::Base

    def call(tag, body, context)
        id = param('youtube.video_id')
        width = param('youtube.width')
        height = param('youtube.height')
        %{<iframe src="http://www.youtube.com/embed/#{id}" width="#{width}" height="#{height}" frameborder="0">Youtube Video</iframe>}
    end
end


class RockType
    include Webgen::Tag::Base

    def call(tag, body, context)
        name = param('rocktype.name')
        "/types/#{name}.html"
    end
end

class RockPackage
    include Webgen::Tag::Base

    def call(tag, body, context)
        name = param('rockpackage.name')
        "/pkg/#{name}/index.html"
    end
end

class RockTask
    include Webgen::Tag::Base

    def call(tag, body, context)
        name = param('rocktask.name')
        "/tasks/#{name}.html"
    end
end

class RockTicket
    include Webgen::Tag::Base

    def call(tag, body, context)
        ticket_id = param('rockticket.ticket_id')
        "http://rock.opendfki.de/ticket/#{ticket_id}"
    end
end

class RockSource
    include Webgen::Tag::Base

    def call(tag, body, context)
        uri = param('rocksource.url')
        parts = uri.split('/')

        url = [parts.shift]
        if parts.first == "orogen"
            parts.shift
            url << "orogen-#{parts.shift}"
        else
            url << parts.shift
        end
        url << "blobs" << "master"
        url.concat(parts)
        "http://gitorious.org/#{url.join("/")}"
    end
end

class RockAPI
    include Webgen::Tag::Base

    def call(tag, body, context)
        pkg_name = param('rockapi.pkg_name')
        "/api/#{pkg_name}"
    end
end

module Rock
    @flavors = []
    if ENV['ROCK_DOC_FLAVORED']
        @current_flavor, flavors = ENV['ROCK_DOC_FLAVORED'].split(':')
        @flavors = flavors.split(',')
    end
    def self.current_flavor; @current_flavor end
    def self.flavors; @flavors end
end

config = Webgen::WebsiteAccess.website.config
config.rocktype.name nil, :mandatory => 'default'
config['contentprocessor.tags.map']['rock_type'] = 'RockType'
config.rockpackage.name nil, :mandatory => 'default'
config['contentprocessor.tags.map']['rock_pkg'] = 'RockPackage'
config.rocktask.name nil, :mandatory => 'default'
config['contentprocessor.tags.map']['rock_task'] = 'RockTask'
config.rockticket.ticket_id 0, :mandatory => 'default'
config['contentprocessor.tags.map']['rock_ticket'] = 'RockTicket'
config.rocksource.url nil, :mandatory => 'default'
config['contentprocessor.tags.map']['rock_source'] = 'RockSource'
config.rockapi.pkg_name nil, :mandatory => 'default'
config['contentprocessor.tags.map']['rock_api'] = 'RockAPI'
config.vimeo.video_id 0, :mandatory => 'default'
config.vimeo.width 250
config.vimeo.height 180
config.vimeo.embed true
config['contentprocessor.tags.map']['vimeo'] = 'Vimeo'
config.youtube.video_id 0, :mandatory => 'default'
config.youtube.width 480
config.youtube.height 360
config.youtube.embed true
config['contentprocessor.tags.map']['youtube'] = 'YouTube'
