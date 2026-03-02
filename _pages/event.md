---
layout: page 
title: final event 
invitedspeakers: true
registrationform: false
permalink: /event/
nav: true

organizers: true
---

<div class="row">
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/opening_1.jpeg"
                  width="100%"
                  height="auto"
                  alt="opening-session WEMB"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/opening_2.jpeg"
                  width="100%"
                  height="auto"
                  alt="opening-session WEMB"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/opening_3.jpeg"
                  width="100%"
                  height="auto"
                  alt="opening-session WEMB"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
</div>
<div class="row">
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/giulia_3.jpeg"
                  width="100%"
                  height="auto"
                  alt="Giulia Rambelli Conceptual Knowledge Organization"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/adele_1.jpeg"
                  width="100%"
                  height="auto"
                  alt="Adele Loia and Gianluca Sperduti"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/gian_4.jpeg"
                  width="100%"
                  height="auto"
                  alt="Gianluca Sperduti Misspellings Survey"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
  <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/giovanni_1.jpeg"
                  width="100%"
                  height="auto"
                  alt="Giovanni Puccetti Word Ladders"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/tavola_1.jpeg"
                  width="100%"
                  height="auto"
                  alt="Tavola Rotonda Andrea Pedrotti Giulia Rambelli"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/tavola_3.jpeg"
                  width="100%"
                  height="auto"
                  alt="Tavola Rotonda Andrea Pedrotti Giulia Rambelli"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
</div>
<div class="row">
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/all_1.jpeg"
                  width="100%"
                  height="auto"
                  alt="opening-session"
                  class="WEMB Organizers"
                  zoomable=true
        %} 
    </div>
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/all_2.jpeg"
                  width="100%"
                  height="auto"
                  class="WEMB Organizers"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
    <div class="col-sm">
        {%
                  include figure.liquid
                  loading="eager"
                  path="assets/img/finalevent/all_3.jpeg"
                  width="100%"
                  height="auto"
                  class="WEMB Organizers"
                  class="preview z-depth-1 rounded medium-zoom-image"
                  zoomable=true
        %} 
    </div>
</div>


<!-- Please, <a href="#form-registration">register</a> to the event via the form at within this webpage. -->

>
VENUE February 11: <a href="https://maps.app.goo.gl/KEvaVQaq8w64Crqj8">Aula Prodi</a>, piazza S. Giovanni in Monte 2 (BO), piano terra.
>
VENUE February 12: <a href="https://maps.app.goo.gl/aAJCHC45iQe2Z6dT6">Aula 4</a> del Palazzo Hercolani, Strada Maggiore 45 (BO), piano terra

<!-- Please note that the event will be held in Italian. -->

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
