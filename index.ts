import rp from "request-promise";
import cheerio from "cheerio";

var options = {
    uri: 'https://jovemnerd.com.br/',
    transform: function (body: any) {
      return cheerio.load(body);
    }
  };

rp(options)
    .then(($: CheerioSelector) => {
        console.log('data');
        var li = $('.submenu__item');

        li.each((_i, element) => { 
            var link = $(element).children('a');
            if (link.attr('href'))
                console.log(link.attr('href'));
        });
        
    })
    .catch((err) => {
        console.log(err);
    });
