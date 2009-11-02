#
#
# Author:  Michael 'entropie' Trommer <mictro@gmail.com>
#

require "time"
require "json"

task :jquery do
  mkdir_p "script"
  sh "wget \"http://jqueryjs.googlecode.com/files/jquery-1.3.2.js\" -O script/jquery.js"
end

def read_dir(dir, &blk)
  Dir.chdir(dir){
    Dir["*"].each do |folder|
      unless File.directory?(folder)
        yield File.expand_path(folder)
      else
        read_dir(folder, &blk)
      end
    end
  }
end


task :move_data_files do
  Dir["data/*.*"].each do |file|
    str = `PAGER='' git log #{file}`
    begin
      date = str.grep(/^Date:\s+(.*)$/).join[8..-1].strip
      time = Time.parse(date)
    rescue
      time = date = Time.now
    end
    mkdir_p(path = "data/#{time.year}/#{time.month}/#{time.day}")
    fname = time.strftime("%H%M%I-") +  File.basename(file)
    mv file, path + "/" + fname
  end
end

task :index => [:move_data_files, :markup] do

  ret = {:years => {}}
  dir = File.dirname(__FILE__) + "/"
  read_dir("data") do |file|
    filet = file.gsub(/^#{dir}/, '').gsub(/^data\//, '')
    year = filet.scan(/^(\d+)\//).flatten.first.to_i
    month = File.basename(File.dirname(File.dirname(filet))).to_i
    name = File.basename(filet)
    day = File.basename(File.dirname(filet))
    next if name =~ /\.markdown$/
    smonth = "%02i"%month
    ret[:years][year] ||= {:months => {}}
    ret[:years][year][:months][smonth] ||= {}
    (ret[:years][year][:months][smonth]["%02i"%day] ||= []) << filet
  end
  p ret
  File.open('index.json', 'w+'){|file| file.write(ret.to_json)}
end



task :baseline do
  mkdir_p "css"
  mkdir_p "tmp"

  Dir.chdir("tmp") do
    sh "git clone git://github.com/entropie/baseline.git"
    Dir["baseline/css/*.css"].each do |baseline_source|
      cp baseline_source, "../css"
    end
  end
  rm_r "tmp"
end


require "redcloth"
task :markup do
  read_dir("data") do |file|
    next unless file =~ /\.markdown/
    path, name = File.dirname(file), File.basename(file)
    nfile_name = path + "/" + name.sub(File.extname(name), '') + ".html"
    markup = File.readlines(file).join
    html = RedCloth.new(markup).to_html.gsub(/<br \/>/, '')
    puts html
    puts
    
    File.open(nfile_name, 'w+'){|f| f.write(html)}
  end
end


task :hamlize do
  ruby "../../bin/hamlize ."
end



=begin
Local Variables:
  mode:ruby
  fill-column:70
  indent-tabs-mode:nil
  ruby-indent-level:2
End:
=end
