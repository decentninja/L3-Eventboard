(function () {
    var one = Template.eventPost
    var all = Template.eventPosts

    all.eventPostsData = function() {
        return getFilteredPosts
    }

    all.rendered = function() {
        if (!this._rendered) {
            this._rendered = true
            $('#event_grid').masonry({
                itemSelector: '.eventPost',
                isFitWidth: true,

                isAnimated: true,
                animationOptions: {
                    duration: 100,
                    easing: 'linear',
                    queue: false
                }

            })
        } else {
            $('#event_grid').masonry('reload')
        }
    }


    one.rendered = function() {
        if (Session.equals("selected", this.data._id)) {
            openModal(this.find('.modal'))
        }
    }

    one.helpers({
        date: function() {
            if(typeof this.date == "string") {
                return this.date
            } else {
                moment.lang('en', {
                    calendar : {
                        lastDay : '[Yesterday], dddd HH:mm',
                        sameDay : '[Today], dddd HH:mm',
                        nextDay : '[Tomorrow], dddd HH:mm',
                        lastWeek : '[last] dddd [at] HH:mm',
                        nextWeek : 'dddd [at] HH:mm',
                        sameElse : 'YYYY-MM-DD HH:mm'
                    }
                });
                return moment(this.date).calendar()
            }
        },
        short: function() {
            // Get first 3 sentences in description.
            return this.description.match(/[^\.!\?]+[\.!\?]+/g)[0]
        }
    })

    one.events({
        "click": function(e, template) {
            if(!Session.equals("selected", this._id)) {
                openModal(template.find('.modal'))
                Session.set("selected", this._id)
                updateUrl()
            }
        }
    })

})()