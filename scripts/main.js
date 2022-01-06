const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

$('li').click(function(){
    $('li').removeClass('active');
    $(this).addClass('active');

    if (this.id == 'daily'){
        $('.work .card__time').text(data[0].timeframes.daily.current + (data[0].timeframes.daily.current!=1?'hrs':'hr'))
        $('.work .card__previous').text('Yesterday - ' + data[0].timeframes.daily.previous + (data[0].timeframes.daily.previous!=1?'hrs':'hr'))
        $('.play .card__time').text(data[1].timeframes.daily.current + (data[1].timeframes.daily.current!=1?'hrs':'hr'))
        $('.play .card__previous').text('Yesterday - ' + data[1].timeframes.daily.previous + (data[1].timeframes.daily.previous!=1?'hrs':'hr'))
        $('.study .card__time').text(data[2].timeframes.daily.current + (data[2].timeframes.daily.current!=1?'hrs':'hr'))
        $('.study .card__previous').text('Yesterday - ' + data[2].timeframes.daily.previous + (data[2].timeframes.daily.previous!=1?'hrs':'hr'))
        $('.exercise .card__time').text(data[3].timeframes.daily.current + (data[3].timeframes.daily.current!=1?'hrs':'hr'))
        $('.exercise .card__previous').text('Yesterday - ' + data[3].timeframes.daily.previous + (data[3].timeframes.daily.previous!=1?'hrs':'hr'))
        $('.social .card__time').text(data[4].timeframes.daily.current + (data[4].timeframes.daily.current!=1?'hrs':'hr'))
        $('.social .card__previous').text('Yesterday - ' + data[4].timeframes.daily.previous + (data[4].timeframes.daily.previous!=1?'hrs':'hr'))
        $('.self-care .card__time').text(data[5].timeframes.daily.current + (data[5].timeframes.daily.current!=1?'hrs':'hr'))
        $('.self-care .card__previous').text('Yesterday - ' + data[5].timeframes.daily.previous + (data[5].timeframes.daily.previous!=1?'hrs':'hr'))
    } else if (this.id == 'weekly') {
        $('.work .card__time').text(data[0].timeframes.weekly.current + 'hrs')
        $('.work .card__previous').text('Last Week - ' + data[0].timeframes.weekly.previous + 'hrs')
        $('.play .card__time').text(data[1].timeframes.weekly.current + 'hrs')
        $('.play .card__previous').text('Last Week - ' + data[1].timeframes.weekly.previous + 'hrs')
        $('.study .card__time').text(data[2].timeframes.weekly.current + 'hrs')
        $('.study .card__previous').text('Last Week - ' + data[2].timeframes.weekly.previous + 'hrs')
        $('.exercise .card__time').text(data[3].timeframes.weekly.current + 'hrs')
        $('.exercise .card__previous').text('Last Week - ' + data[3].timeframes.weekly.previous + 'hrs')
        $('.social .card__time').text(data[4].timeframes.weekly.current + 'hrs')
        $('.social .card__previous').text('Last Week - ' + data[4].timeframes.weekly.previous + 'hrs')
        $('.self-care .card__time').text(data[5].timeframes.weekly.current + 'hrs')
        $('.self-care .card__previous').text('Last Week - ' + data[5].timeframes.weekly.previous + 'hrs')

    } else if (this.id == 'monthly') {
        $('.work .card__time').text(data[0].timeframes.monthly.current + 'hrs')
        $('.work .card__previous').text('Last Month - ' + data[0].timeframes.monthly.previous + 'hrs')
        $('.play .card__time').text(data[1].timeframes.monthly.current + 'hrs')
        $('.play .card__previous').text('Last Month - ' + data[1].timeframes.monthly.previous + 'hrs')
        $('.study .card__time').text(data[2].timeframes.monthly.current + 'hrs')
        $('.study .card__previous').text('Last Month - ' + data[2].timeframes.monthly.previous + 'hrs')
        $('.exercise .card__time').text(data[3].timeframes.monthly.current + 'hrs')
        $('.exercise .card__previous').text('Last Month - ' + data[3].timeframes.monthly.previous + 'hrs')
        $('.social .card__time').text(data[4].timeframes.monthly.current + 'hrs')
        $('.social .card__previous').text('Last Month - ' + data[4].timeframes.monthly.previous + 'hrs')
        $('.self-care .card__time').text(data[5].timeframes.monthly.current + 'hrs')
        $('.self-care .card__previous').text('Last Month - ' + data[5].timeframes.monthly.previous + 'hrs')

    }
})