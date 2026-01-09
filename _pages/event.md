---
layout: page 
title: event
permalink: /event/
nav: true
---

# TBD

>
VENUE: Sala dei Poeti di Palazzo Hercolani (Strada Maggiore 45, BO)

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
        <strong>{{ session.title }}</strong><br/>
        <em>{{ session.speakers }}</em>
        {% if session.link %}
          <br/>
          <a href="{{ session.link }}">[link]</a>
        {% endif %}
      </td>
    </tr>
    {% endfor %}
    </tbody>
  </table>

{% endfor %}

</div>