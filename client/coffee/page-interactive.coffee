$(document).ready ->
  $('.submitTermAction').click (event) ->
    event.preventDefault()
    answer =
      term: $('.termInput').val()
      value: ""
      hasValue: false
    $.ajax '/jedi',
      type: 'POST'
      data: JSON.stringify(answer)
      dataType: 'text'
      contentType: 'application/json'

      success: ->
        location.reload()

      error: (response) ->
        console.log("Bad response: #{response.toString()}")