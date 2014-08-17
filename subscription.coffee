Session.set("subscription", false)
Deps.autorun ->
  subscription.sub_list = Meteor.subscribe("list", "marathon")
  if subscription.sub_list.ready()
    Session.set("subscription", true)


###
Deps.autorun ->
  if Meteor.user()
    subscription.sub_list = Meteor.subscribe "list"
    if subscription.sub_list.ready()
      ses.subscription.set(true)
  else
    if subscription.sub_list
      subscription.sub_list.stop()
    if subscription.sub_humans
      subscription.sub_humans.stop()
    ses.subscription.set(false)
  return
###
