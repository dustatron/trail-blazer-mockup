// link for full body image
// https://ak-static.cms.nba.com/wp-content/uploads/silos/nba/latest/440x700/${player.id}.png

//link for head shot
// http://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/1040x760/${player.id}.png

// Previous Api call
function renderSchedule(year, seasonType) {
  jQuery.getJSON(
    'https://data.nba.com/data/v2015/json/mobile_teams/nba/' +
      year +
      '/teams/trail_blazers_schedule_0' +
      seasonType +
      '.json',
    function (data) {
      var gcodes = [];
      jQuery.each(data.gscd.g, function (i, val) {
        /* Format game date and opposing team info */
        dayNumber = val.gdte.split('-');
        gameHour = moment(val.etm).subtract(3, 'hours').format('h:mm A z');
        monthVal = moment(val.gdte).format('MMM').toLowerCase();
        monthName = moment(val.gdte).format('MMMM');
        gameDay = moment(val.gdte).format('dddd').toUpperCase();
        gameDayShort = moment(val.gdte).format('ddd').toLowerCase();
        homeTeam = val.h.tc + ' ' + val.h.tn;
        if (val.v.tc + ' ' + val.v.tn == 'Haifa Maccabi Haifa') {
          visitorTeam = 'Maccabi Haifa';
        } else {
          visitorTeam = val.v.tc + ' ' + val.v.tn;
        }
        //visitorTeam = val.v.tc + ' ' + val.v.tn;
        gameID = val.gid;

        /* Enable this block for previous year as test */
        // if ( i == 0  && seasonType == 1) {
        //   val.st = 2;
        // } else if ( i < 15 ) {
        //   val.st = 1;
        // } else {}

        /* 
      BEFORE GAME:  val.st == 1 
      DURING GAME:  val.st == 2
      AFTER GAME:   val.st == 3
      bcloc4
      */
        if (val.st == 1) {
          gameStatus = 'before';
        }
        if (val.st == 1 && val.h.tc == 'Portland') {
          /* This checks for HomeGames and non current games */
          var gamePrice = new GamePrice(val.gcode, val.gid);
          gcodes.push(gamePrice);
        }
        offerString = '';
        offerAnchor = '';

        jQuery.each(specialOffers, function (i, offer) {
          if (val.st == 1 && val.h.tc == 'Portland' && offer.id == gameID) {
            offerAnchor =
              '<button class="col-xs-6 flip">Special Offers&nbsp;<i class="fas fa-caret-right"></i></button>\
          <button class="col-xs-6 button" data-modal="#modal' +
              gameID +
              '">Special Offers&nbsp;<i class="fas fa-caret-right"></i></button>';

            offerString =
              '<div class="offer-dropdown">\
            <div class="offer-img" style="background:url(' +
              offer.imgURL +
              ')"></div>\
            <div class="offer-name">' +
              offer.name +
              '</div>\
            <div class="offer-description">' +
              offer.description +
              '</div>\
            <div class="more-info"><a href="' +
              offer.link +
              '">MORE INFO&nbsp;<i class="fas fa-caret-right"></i></a>\
            <a class="close">Back&nbsp;<i class="fas fa-caret-right"></i></a>\
            </div>\
          </div>';
          }
        });

        if (
          gameDayShort == 'fri' ||
          gameDayShort == 'sat' ||
          gameDayShort == 'sun'
        ) {
          weekend = 'weekend';
        } else {
          weekend = '';
        }
        if (
          gameDayShort == 'mon' ||
          gameDayShort == 'tue' ||
          gameDayShort == 'wed' ||
          gameDayShort == 'thu' ||
          gameDayShort == 'fri'
        ) {
          weekday = 'weekday';
        } else {
          weekday = '';
        }

        if (val.h.tc == 'Portland' && val.st == 1) {
          portland = 'HOME';
          opponent = visitorTeam;
          teamName = val.v.tn.toLowerCase();
          link =
            '<a id="presale-link" target="_blank" href="https://www.nba.com/blazers/singlegamepresale?gameID=' +
            gameID +
            '">VIEW TICKETS&nbsp;<i class="fas fa-caret-right"></i></a>';
        }

        if (val.v.tc == 'Portland') {
          portland = 'AWAY';
          opponent = homeTeam;
          teamName = val.h.tn.toLowerCase();
          link = '';
        }
        var tvArray = [];
        if (val.h.tc == 'Portland') {
          radioBroadcast = '';
          natlTV = '';
          awayTV = '';
          localTV = '';

          jQuery.each(val.bd.b, function (i, bdval) {
            if (bdval.scope == 'home' && bdval.type == 'radio') {
              radioBroadcast = bdval.disp;
              radioFlag = '';
            }
            if (bdval.type == 'tv' && bdval.scope == 'home') {
              tvArray.push(bdval.disp);
              tvFlag = '';
            }
            if (bdval.type == 'tv' && bdval.scope == 'natl') {
              tvArray.push(bdval.disp);
              tvFlag = '';
            }
          });
        }

        if (tvArray.length == 1) {
          tvString = tvArray[0];
        }
        if (tvArray.length == 2) {
          tvString = tvArray[0] + ', ' + tvArray[1];
        }
        if (tvArray.length == 3) {
          tvString = tvArray[0] + ', ' + tvArray[1] + ', ' + tvArray[2];
        }

        var season = '';
        if (seasonType == 1) {
          season = 'preSeasonList';
        } else if (seasonType == 2) {
          season = 'regSeasonList';
        }

        // render all home games and pricing
        if (val.st == 1 && val.h.tc == 'Portland') {
          jQuery('#' + season).append(
            '<div class="col-xs-6 col-sm-4 col-md-3 ticket clearfix team_' +
              teamName +
              ' ' +
              monthVal +
              ' ' +
              gameDayShort +
              ' ' +
              gameID +
              ' ' +
              weekend +
              ' ' +
              weekday +
              ' home fx-wrap">\
        <div class="card">\
          <div class="details front">\
            <div class="title" id="gamerecap' +
              gameID +
              '">\
                <div class="tickethotflag"><svg class="icon-fire"><use xlink:href="#icon-fire"></use></svg></div>\
                <div class="ticketvalueflag"><svg class="icon-dollar"><use xlink:href="#icon-dollar"></use></svg></div>\
            </div>\
            <div class="team">\
              <div class="logo"></div>\
              <div class="event col-xs-8">\
                <div class="name">\
                  <h2>' +
              opponent +
              '</h2>\
                </div>\
                <div class="name mobile">\
                  <h2>' +
              teamName +
              '</h2>\
                </div>\
                <div class="date desktop">\
                  <h4><strong>' +
              gameDayShort.toUpperCase() +
              ', ' +
              monthVal.toUpperCase() +
              ' ' +
              dayNumber[2] +
              '</strong></h4><h4 class="arena">' +
              val.an +
              ' @ ' +
              gameHour +
              '</h4>\
                  <div class="broadcast broadcast-' +
              gameID +
              '" >\
                    <a>Broadcast Info &nbsp;<i id="icon" class="fas fa-caret-down"></i></a>\
                  </div>\
                </div>\
              </div>\
              <div class="teamlead col-xs-4" id="pricingBox' +
              gameID +
              '">\
                <div class="title">\
                  <div class="aslowastitle">AS LOW AS</div>\
                </div>\
                <div class="leadersbox">\
                  <div class="pbhigh">3</div>\
                </div>\
              </div>\
            </div>\
              <div class="game-recap" id="gamerecap' +
              gameID +
              '">\
                <div class="special-offers so-' +
              gameID +
              '">' +
              offerAnchor +
              '</div>\
                <div class="sign-up"><a id="presale-link' +
              gameID +
              '" target="_blank" href="#">VIEW TICKETS&nbsp;<i class="fas fa-caret-right"></i></a></div>\
                <div class="date mobile" style="display:none;"><h4><strong>' +
              gameDay +
              ', ' +
              monthVal.toUpperCase() +
              ' ' +
              dayNumber[2] +
              '</strong><br>' +
              val.an +
              ' @ ' +
              gameHour +
              '</h4></div>\
                <div class="sign-up" style="display:none;">' +
              link +
              '</div>\
              </div>\
            </div>\
          <div class="offer-container desktop back">' +
              offerString +
              '<button class="flip">Back&nbsp;<i class="fas fa-caret-right"></i></button></div>\
        <div class="bd-dropdown bd-drop-positionhide">\
        <div class="tv-dropdown" ' +
              tvFlag +
              '><div class="drop-spacer"></div><div class="broadcast-icon">\
            <span class="left-tv"><img src="https://i.cdn.turner.com/drp/nba/blazers/sites/default/files/tv-icon.png">&nbsp;<strong><span class="tv-channel">TV CHANNELS</span></strong></span></div>\
            <div class="tv-bd" ' +
              tvFlag +
              '>' +
              tvString +
              '</div>\
        </div>\
        <div class="radio-dropdown" ' +
              radioFlag +
              '><div class="drop-spacer"></div><div class="broadcast-icon rd-corner">\
            <span class="left-tv"><img src="https://i.cdn.turner.com/drp/nba/blazers/sites/default/files/radio-station-icon.png">&nbsp;<strong><span class="span-broadcast">RADIO BROADCAST</span></strong></span></div>\
            <div class="radio-bd" ' +
              radioFlag +
              '>' +
              radioBroadcast +
              '</div>\
        </div>\
      </div>\
      </div>\
      <div id="modal' +
              gameID +
              '" class="modal">\
        <div class="modal-content">' +
              offerString +
              '</div>\
      </div>\
    </div>'
          );
        }
        // Card Flipping for Special Offers
        jQuery(document).on('click', '.flip', function () {
          let card = jQuery(this).closest('.card');
          if (card.hasClass('flip-it')) card.removeClass('flip-it');
          else card.addClass('flip-it');
        });
        jQuery('.card').each(function () {
          let href = $(this).data('href');
          jQuery(this)
            .find('.image')
            .css({
              backgroundImage: ['url(', href, ')'].join(''),
            });
        });

        // Adding specific class to cards that have a special offer affiliated to game for mobile sizing
        $('.special-offers button.flip')
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass('special-offer-ticket');

        /* Modal script - tested */
        $('.button').on('click', function () {
          var modal = $(this).data('modal');
          $(modal).show();
        });

        $('.modal').on('click', function (e) {
          var className = e.target.className;
          if (className === 'modal' || className === 'close') {
            $(this).closest('.modal').hide();
          }
        });
      }); //End Game Loop

      jQuery('.presale-link').on('click', function (event) {
        setGetParameter('gameID', gameID);
      });

      getTicketPricing(gcodes);
    }
  ); //End Reg Season getJSON call
}
renderSchedule(2019, 1);

renderSchedule(2019, 2);
