/* ===== MBTI 性格小测试 · 逻辑 ===== */

/* 状态（仅存于内存，刷新即清空） */
var current = 0;          // 当前题下标
var answers = [];         // answers[i] = 0（选A）或 1（选B）

function showView(id) {
  var views = document.querySelectorAll('.view');
  for (var i = 0; i < views.length; i++) views[i].classList.remove('active');
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

/* 首页 → 答题 */
function startQuiz() {
  current = 0;
  answers = [];
  renderQuestion();
  showView('view-quiz');
}

/* 渲染当前题 */
function renderQuestion() {
  var q = QUESTIONS[current];
  var total = QUESTIONS.length;
  document.getElementById('progress-text').textContent = '第 ' + (current + 1) + ' / ' + total + ' 题';
  document.getElementById('progress-fill').style.width = ((current) / total * 100) + '%';
  document.getElementById('q-dim').textContent = q.dimLabel;
  document.getElementById('q-text').textContent = q.question;
  document.getElementById('opt-a-text').textContent = q.optionA.text;
  document.getElementById('opt-b-text').textContent = q.optionB.text;
  /* 已答过的题：高亮原选项 */
  var a = answers[current];
  document.getElementById('opt-a').classList.toggle('selected', a === 0);
  document.getElementById('opt-b').classList.toggle('selected', a === 1);
  document.getElementById('btn-back').disabled = (current === 0);
}

/* 选择并前进 */
function choose(opt) {
  answers[current] = opt;
  if (current < QUESTIONS.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
}

/* 上一题 */
function goPrev() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

/* 计分与结果 */
function showResult() {
  var votes = { EI: { E: 0, I: 0 }, SN: { S: 0, N: 0 }, TF: { T: 0, F: 0 }, JP: { J: 0, P: 0 } };
  for (var i = 0; i < QUESTIONS.length; i++) {
    var q = QUESTIONS[i];
    var pt = (answers[i] === 0) ? q.optionA.point : q.optionB.point;
    votes[q.dimension][pt]++;
  }
  var typeCode = '';
  var hasTie = false;
  var dimRows = '';
  for (var d = 0; d < DIMENSIONS.length; d++) {
    var dim = DIMENSIONS[d];
    var v = votes[dim.key];
    var total = v[dim.left] + v[dim.right];
    var leftPct = Math.round(v[dim.left] / total * 100);
    var rightPct = 100 - leftPct;
    var tie = (v[dim.left] === v[dim.right]);
    var win = tie ? TIE_DEFAULT[dim.key] : (v[dim.left] > v[dim.right] ? dim.left : dim.right);
    if (tie) hasTie = true;
    typeCode += win;
    dimRows += ''
      + '<div class="dim-row">'
      +   '<div class="dim-labels">'
      +     '<span class="side left">' + dim.left + '<small>' + dim.leftName + ' ' + leftPct + '%</small></span>'
      +     '<span class="pct">' + v[dim.left] + ' : ' + v[dim.right] + ' 票</span>'
      +     '<span class="side right">' + dim.right + '<small>' + dim.rightName + ' ' + rightPct + '%</small></span>'
      +   '</div>'
      +   '<div class="dim-bar"><div class="pin" style="left:' + leftPct + '%;"></div></div>'
      +   (tie ? '<div class="tie-note">本维度倾向持平，已按默认规则取 ' + win + '，建议稍后再测</div>' : '')
      + '</div>';
  }
  document.getElementById('type-code').textContent = typeCode;
  document.getElementById('type-name').textContent = TYPE_NAMES[typeCode] || '';
  document.getElementById('tie-banner').style.display = hasTie ? 'block' : 'none';
  document.getElementById('dim-list').innerHTML = dimRows;
  showView('view-result');
}

/* 重新测试 */
function restart() {
  current = 0;
  answers = [];
  showView('view-home');
}
