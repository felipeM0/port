function addAllCards() {
  let elem = document.getElementById("row-cards");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.b7web.com.br/cinema/");

  beforeSend();

  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        elem.innerHTML = "";
        var itens = JSON.parse(xhr.responseText);
        itens.forEach((e) => {
          var card = `<div class="card">
                            <div class="card-image">
                                <img src="${e.avatar}"/>
                            </div>
                            <div class="card-content">
                                <p>Mobile</p>
                                <div>
                                    <p>${e.titulo}</p>
                                    <p>2020</p>
                                </div>
                            </div>
                        </div>`;

          elem.innerHTML += card;
        });
      }
    }
  };
}

function beforeSend() {
  var itens = `<div class="ph-item card">
                    <div class="ph-col-4-mod">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="ph-picture responsive-img"/>
                    </div>
                    <div class="ph-col-8-mod">
                        <div class="ph-row">
                            <div class="ph-col-6"></div>
                        </div>
                        <div class="ph-row">
                            <div class="ph-col-8 big"></div>
                            <div class="ph-col-2 big"></div>
                        </div>
                    </div>
                </div>
                <div class="ph-item card">
                    <div class="ph-col-4-mod">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="ph-picture responsive-img"/>
                    </div>
                    <div class="ph-col-8-mod">
                        <div class="ph-row">
                            <div class="ph-col-6"></div>
                        </div>
                        <div class="ph-row">
                            <div class="ph-col-8 big"></div>
                            <div class="ph-col-2 big"></div>
                        </div>
                    </div>
                </div>
                <div class="ph-item card">
                    <div class="ph-col-4-mod">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="ph-picture responsive-img"/>
                    </div>
                    <div class="ph-col-8-mod">
                        <div class="ph-row">
                            <div class="ph-col-6"></div>
                        </div>
                        <div class="ph-row">
                            <div class="ph-col-8 big"></div>
                            <div class="ph-col-2 big"></div>
                        </div>
                    </div>
                </div>
                <div class="ph-item card">
                    <div class="ph-col-4-mod">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="ph-picture responsive-img"/>
                    </div>
                    <div class="ph-col-8-mod">
                        <div class="ph-row">
                            <div class="ph-col-6"></div>
                        </div>
                        <div class="ph-row">
                            <div class="ph-col-8 big"></div>
                            <div class="ph-col-2 big"></div>
                        </div>
                    </div>
                </div>
                <div class="ph-item card">
                    <div class="ph-col-4-mod">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="ph-picture responsive-img"/>
                    </div>
                    <div class="ph-col-8-mod">
                        <div class="ph-row">
                            <div class="ph-col-6"></div>
                        </div>
                        <div class="ph-row">
                            <div class="ph-col-8 big"></div>
                            <div class="ph-col-2 big"></div>
                        </div>
                    </div>
                </div>`;

  document.getElementById("row-cards").innerHTML += itens;
}
