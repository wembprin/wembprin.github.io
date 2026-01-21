---
layout: page 
title: final event 
invitedspeakers: true
registrationform: true
permalink: /event/
nav: true

organizers: true
---

Please, <a href="#form-registration">register</a> to the event via the form at within this webpage.

>
VENUE February 11: <a href="https://maps.app.goo.gl/KEvaVQaq8w64Crqj8">Aula Prodi</a>, piazza S. Giovanni in Monte 2 (BO), piano terra.
>
VENUE February 12: <a href="https://maps.app.goo.gl/aAJCHC45iQe2Z6dT6">Aula 4</a> del Palazzo Hercolani, Strada Maggiore 45 (BO), piano terra


<div class="schedule">

{% for day in site.data.schedule %}
  <h2 class="schedule-day">{{ day.day }}</h2>

  <table class="schedule-table">
  <thead>
      <tr>
        <th class="schedule-time">Time</th>
        <th class="schedule-content">Event</th>
      </tr>
    </thead>
    <tbody>
    {% for session in day.sessions %}
    <tr>
      <td class="schedule-time">
        {{ session.time }}
      </td>
      <td class="schedule-content">
        {{ session.title }}
        {% if session.speakers %}
          : <strong>{{ session.speakers}}</strong><br/>
        {% endif %}
        <em>{{ session.subtitle }}</em>
        {% if session.link %}
          <br/>
          <a href="{{ session.link }}">[link]</a>
        {% endif %}
      </td>
    </tr>

    {% if session.papers %}
  {% for paper in session.papers %}
  <tr class="paper-row">
    <td class="schedule-time"></td>
    <td class="schedule-content">
      <strong>{{ paper.speakers }}</strong>: <em>{{ paper.title }}</em>
      {% if paper.link %}
        <a href="{{ paper.link }}">[link]</a>
      {% endif %}
    </td>
  </tr>
  {% endfor %}
{% endif %}

    {% endfor %}
    </tbody>
  </table>

{% endfor %}

</div>

<!-- <a id="form-registration"></a>
<div style="margin-top: 25px">
  <h2>Final Event Registration Form</h2>

  <iframe width="100%" height="512px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=3EeW6QgbSkW_jGmRgbOJq0Xke4-pu-RLpYrbWX6WeotUNFhXV08xRFA4MzFKMVEyWldGSVI4NjNPQy4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe> 
</div> -->