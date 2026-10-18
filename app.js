const STORAGE_KEY = "goryeo-quest-demo-v1";
const letters = ["A", "B", "C", "D"];
const friends = [
  { id: "seo", name: "서윤", avatar: "서", score: 570 },
  { id: "ha", name: "하준", avatar: "하", score: 510 },
  { id: "ji", name: "지우", avatar: "지", score: 455 },
  { id: "yu", name: "유나", avatar: "유", score: 405 },
  { id: "do", name: "도윤", avatar: "도", score: 360 },
  { id: "chae", name: "채원", avatar: "채", score: 315 },
  { id: "jun", name: "준서", avatar: "준", score: 270 },
];

const sampleQuestions = [
  { type: "mc", prompt: "고려를 세우고 후삼국을 통일한 인물은 누구일까요?", choices: ["왕건", "궁예", "견훤", "광종"], answer: "왕건", source: "고려 역사 기본 문제 · 예시 문항", explanation: "왕건은 918년에 고려를 세우고 936년에 후삼국을 통일했어요." },
  { type: "mc", prompt: "광종이 노비의 신분을 조사해 억울하게 노비가 된 사람을 풀어준 제도는 무엇인가요?", choices: ["전시과", "노비안검법", "과거제", "음서"], answer: "노비안검법", source: "고려 역사 기본 문제 · 예시 문항", explanation: "광종은 노비안검법을 실시해 호족의 세력을 약화하고 왕권을 강화했어요." },
  { type: "mc", prompt: "고려에서 관리 선발을 위해 광종 때 실시한 제도는 무엇인가요?", choices: ["골품제", "화랑도", "과거제", "음서"], answer: "과거제", source: "고려 역사 기본 문제 · 예시 문항", explanation: "광종은 유교 경전에 대한 시험으로 관리를 뽑는 과거제를 실시했어요." },
  { type: "mc", prompt: "거란의 1차 침입 때 외교 담판으로 강동 6주를 확보한 인물은 누구인가요?", choices: ["강감찬", "서희", "윤관", "최충헌"], answer: "서희", source: "고려 역사 기본 문제 · 예시 문항", explanation: "서희는 거란 장수 소손녕과 담판해 강동 6주를 확보했어요." },
  { type: "mc", prompt: "귀주대첩에서 거란군을 크게 물리친 고려의 장군은 누구인가요?", choices: ["서희", "이자겸", "강감찬", "김부식"], answer: "강감찬", source: "고려 역사 기본 문제 · 예시 문항", explanation: "강감찬은 1019년 귀주대첩에서 거란군을 크게 무찔렀어요." },
  { type: "mc", prompt: "고려의 토지 제도로, 관리에게 관직과 품계에 따라 토지를 나누어 준 제도는 무엇인가요?", choices: ["전시과", "균전제", "과전법", "직전법"], answer: "전시과", source: "고려 역사 기본 문제 · 예시 문항", explanation: "전시과는 관리에게 전지와 시지를 지급한 고려의 토지 제도예요." },
  { type: "mc", prompt: "고려 무신 정변이 일어난 해는 언제인가요?", choices: ["918년", "1019년", "1170년", "1231년"], answer: "1170년", source: "고려 역사 기본 문제 · 예시 문항", explanation: "1170년 무신 정변으로 문신 중심의 정치 질서가 크게 흔들렸어요." },
  { type: "mc", prompt: "몽골의 침입에 맞서 부처의 힘으로 나라를 지키려는 뜻을 담아 만든 문화유산은 무엇인가요?", choices: ["직지", "팔만대장경", "훈민정음", "무구정광대다라니경"], answer: "팔만대장경", source: "고려 역사 기본 문제 · 예시 문항", explanation: "고려는 몽골 침입 시기에 팔만대장경을 다시 새겼어요." },
  { type: "short", prompt: "고려를 세운 왕의 이름을 입력해 보세요.", answer: "왕건", source: "고려 역사 기본 문제 · 예시 문항", explanation: "태조 왕건이 고려를 세웠어요." },
  { type: "order", prompt: "고려의 다음 사건을 일어난 순서대로 배열하세요.", answer: ["고려 건국 · 918년", "귀주대첩 · 1019년", "무신 정변 · 1170년", "몽골의 1차 침입 · 1231년"], source: "고려 역사 기본 문제 · 예시 문항", explanation: "고려 건국(918) → 귀주대첩(1019) → 무신 정변(1170) → 몽골의 1차 침입(1231) 순서예요." },
];

const warmupQuestions = [
  { type: "mc", prompt: "태조 왕건이 후대 왕들에게 나라를 다스리는 기준으로 남긴 글은 무엇인가요?", choices: ["훈요 10조", "경국대전", "삼국사기", "속대전"], answer: "훈요 10조", source: "고려 역사 기본 문제 · 연습 문항", explanation: "태조 왕건은 후대 왕들이 지켜야 할 정책 방향을 훈요 10조에 담았어요." },
  { type: "mc", prompt: "고려의 수도 개경은 오늘날 어느 도시에 해당하나요?", choices: ["개성", "평양", "서울", "공주"], answer: "개성", source: "고려 역사 기본 문제 · 연습 문항", explanation: "고려의 수도 개경은 오늘날 북한의 개성 지역이에요." },
  { type: "mc", prompt: "고려 성종 때 지방에 설치한 주요 행정 구역은 몇 목인가요?", choices: ["5목", "8목", "12목", "15목"], answer: "12목", source: "고려 역사 기본 문제 · 연습 문항", explanation: "성종은 지방 통치를 강화하기 위해 전국에 12목을 설치했어요." },
  { type: "mc", prompt: "공민왕이 원의 세력을 몰아내고 되찾은 곳으로 알맞은 것은 무엇인가요?", choices: ["쌍성총관부", "동래성", "한산도", "대마도"], answer: "쌍성총관부", source: "고려 역사 기본 문제 · 연습 문항", explanation: "공민왕은 반원 개혁을 추진하며 쌍성총관부를 공격해 철령 이북의 땅을 되찾았어요." },
  { type: "short", prompt: "고려의 수도 개경은 오늘날 어떤 도시인가요?", answer: "개성", source: "고려 역사 기본 문제 · 연습 문항", explanation: "개경은 오늘날 개성에 해당해요." },
];

const initialState = {
  activeRole: "",
  challengePoints: 0,
  practicePoints: 0,
  streak: 0,
  joined: false,
  ready: false,
  started: false,
  mode: "challenge",
  questionIndex: 0,
  answered: false,
  lastAnswer: "",
  lastCorrect: false,
  lastAwarded: 0,
  sessionQuestions: [],
  orderChoice: [],
  approvedQuestions: [],
  challengeOpen: false,
  taskQuestions: [],
  challengeRoomCode: "",
  roomParticipants: {},
  roomConnectedCount: 0,
  roomStatus: "",
  peerScores: friends.map((friend) => ({ ...friend })),
};

let state = loadState();
let pdfPages = [];
let draftQuestions = [];
let activeFile = null;
let toastTimer;
let studentRoomTimer;
let teacherRoomTimer;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(initialState);
    return { ...structuredClone(initialState), ...saved, peerScores: saved.peerScores?.length ? saved.peerScores : friends.map((friend) => ({ ...friend })) };
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function byId(id) {
  return document.getElementById(id);
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function setView(name) {
  if (name === "role") {
    showRoleChooser();
    return;
  }
  const allowedViews = state.activeRole === "teacher" ? ["teacherHome", "author"] : state.activeRole === "student" ? ["home", "play"] : [];
  if (!allowedViews.includes(name)) return;
  byId("roleView").hidden = true;
  byId("studentHeader").hidden = state.activeRole !== "student";
  byId("teacherHeader").hidden = state.activeRole !== "teacher";
  document.querySelectorAll(".view").forEach((view) => {
    const active = view.id === `${name}View`;
    view.classList.toggle("active", active);
    view.hidden = !active;
  });
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (name === "play") renderPlay();
  if (name === "teacherHome") renderTeacherHome();
}

function showRoleChooser() {
  if (state.activeRole === "student") stopStudentRoomPolling();
  state.activeRole = "";
  saveState();
  byId("studentHeader").hidden = true;
  byId("teacherHeader").hidden = true;
  document.querySelectorAll(".view").forEach((view) => {
    const active = view.id === "roleView";
    view.classList.toggle("active", active);
    view.hidden = !active;
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function enterRole(role) {
  if (role !== "student" && role !== "teacher") return;
  state.activeRole = role;
  saveState();
  if (role === "student" && state.challengeRoomCode && state.challengeOpen) {
    byId("studentRoomCode").value = state.challengeRoomCode;
  }
  setView(role === "teacher" ? "teacherHome" : state.started ? "play" : "home");
}

function renderTeacherHome() {
  byId("teacherQuestionCount").textContent = `${state.approvedQuestions.length}개`;
  byId("teacherTaskStatus").textContent = !state.challengeOpen
    ? "아직 열리지 않음"
    : state.roomStatus === "started" ? "수업 진행 중" : `${state.roomConnectedCount} / 40명 접속`;
  byId("teacherUnitName").textContent = byId("unitName").value || "고려 역사";
  byId("teacherStart").textContent = state.challengeOpen ? "QR·접속 현황 보기 ↗" : "QR로 학생 초대 →";
  byId("teacherAssignmentTitle").textContent = state.challengeOpen ? "초대 링크를 공유했어요" : "학급 과제를 열어요";
  byId("teacherAssignmentHelp").textContent = state.challengeOpen
    ? `${state.roomConnectedCount}명 접속 · 최대 40명. QR로 늦게 온 학생도 들어올 수 있어요.`
    : "QR과 참여 코드를 공유하면 학생이 바로 대기실에 들어옵니다.";
}

async function roomRequest(path, method = "GET", body) {
  const response = await fetch(path, {
    method,
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "수업 방에 연결하지 못했어요.");
  return result;
}

function getRoomParticipantId(code) {
  state.roomParticipants ||= {};
  if (!state.roomParticipants[code]) {
    state.roomParticipants[code] = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    saveState();
  }
  return state.roomParticipants[code];
}

function stopStudentRoomPolling() {
  clearInterval(studentRoomTimer);
  studentRoomTimer = undefined;
}

function stopTeacherRoomPolling() {
  clearInterval(teacherRoomTimer);
  teacherRoomTimer = undefined;
}

function updateRoomShare(room) {
  state.roomConnectedCount = room.connected;
  state.roomStatus = room.status;
  if (room.status === "closed") state.challengeOpen = false;
  saveState();
  byId("roomConnectedCount").textContent = room.connected;
  byId("roomStatusText").textContent = room.status === "started"
    ? "과제가 시작됐어요. 늦게 온 학생도 참여할 수 있어요."
    : room.status === "closed" ? "수업 방이 닫혔어요." : `${room.connected}명이 접속했어요. 학생은 계속 입장할 수 있어요.`;
  byId("startRoomTask").disabled = room.status === "started" || room.status === "closed";
  byId("startRoomTask").textContent = room.status === "started" ? "과제가 진행 중이에요" : "과제 시작하기 →";
  byId("closeRoomTask").hidden = room.status === "closed";
  renderTeacherHome();
}

async function pollTeacherRoom(code) {
  try {
    updateRoomShare(await roomRequest(`/api/rooms/${code}`));
  } catch (error) {
    stopTeacherRoomPolling();
    byId("roomStatusText").textContent = error.message;
    showToast(error.message);
  }
}

function startTeacherRoomPolling(code) {
  stopTeacherRoomPolling();
  pollTeacherRoom(code);
  teacherRoomTimer = setInterval(() => pollTeacherRoom(code), 4000);
}

function openRoomShare(code) {
  state.challengeRoomCode = code;
  const inviteUrl = new URL(window.location.href);
  inviteUrl.search = "";
  inviteUrl.hash = "";
  inviteUrl.searchParams.set("join", code);
  const inviteLink = inviteUrl.href;
  byId("roomCodeText").textContent = code;
  const qr = byId("roomQr");
  qr.replaceChildren();
  if (window.QRCode) {
    new window.QRCode(qr, {
      text: inviteLink,
      width: 160,
      height: 160,
      colorDark: "#17343c",
      colorLight: "#ffffff",
      correctLevel: window.QRCode.CorrectLevel.M,
    });
  } else {
    qr.textContent = "QR을 불러오지 못했어요. 참여 코드를 사용해 주세요.";
  }
  byId("roomShareOverlay").dataset.inviteLink = inviteLink;
  byId("roomShareOverlay").hidden = false;
  startTeacherRoomPolling(code);
}

async function createClassRoom() {
  const questions = state.approvedQuestions.length ? state.approvedQuestions : sampleQuestions;
  try {
    const room = await roomRequest("/api/rooms", "POST", {
      unit: byId("unitName").value.trim() || "고려 역사",
      questions,
    });
    state.challengeRoomCode = room.roomCode;
    state.challengeOpen = true;
    state.taskQuestions = questions;
    state.challengePoints = 0;
    state.streak = 0;
    state.peerScores = friends.map((friend) => ({ ...friend }));
    state.started = false;
    state.joined = false;
    state.questionIndex = 0;
    state.sessionQuestions = [];
    state.answered = false;
    updateRoomShare(room);
    openRoomShare(room.roomCode);
    showToast("수업 방을 만들었어요. QR이나 참여 코드를 공유하세요.");
  } catch (error) {
    showToast(error.message || "수업 방을 만들지 못했어요.");
  }
}

function startStudentRoomPolling(code) {
  stopStudentRoomPolling();
  studentRoomTimer = setInterval(async () => {
    try {
      const room = await roomRequest(`/api/rooms/${code}/heartbeat`, "POST", {
        participantId: getRoomParticipantId(code),
      });
      state.roomConnectedCount = room.connected;
      state.roomStatus = room.status;
      if (room.status === "started" && !state.started) {
        state.taskQuestions = room.questions || state.taskQuestions;
        state.challengeOpen = true;
        startQuiz("challenge");
        showToast("선생님이 과제를 시작했어요.");
      } else if (room.status === "closed") {
        stopStudentRoomPolling();
        state.challengeOpen = false;
        saveState();
        showToast("선생님이 수업 방을 닫았어요.");
      } else {
        saveState();
      }
    } catch (error) {
      stopStudentRoomPolling();
      if (!state.started) {
        state.challengeOpen = false;
        state.joined = false;
        state.challengeRoomCode = "";
        saveState();
        setView("home");
      }
      showToast(error.message || "수업 연결이 끊겼어요.");
    }
  }, 12000);
}

async function joinClassRoom(code, action = "join") {
  const alreadyPlaying = state.challengeRoomCode === code && state.mode === "challenge" && state.started;
  state.activeRole = "student";
  state.challengeRoomCode = code;
  state.challengeOpen = true;
  state.joined = true;
  state.mode = "challenge";
  saveState();
  try {
    const room = await roomRequest(`/api/rooms/${code}/${action}`, "POST", {
      participantId: getRoomParticipantId(code),
    });
    state.roomConnectedCount = room.connected;
    state.roomStatus = room.status;
    state.taskQuestions = room.questions || state.taskQuestions;
    state.challengeOpen = room.status !== "closed";
    if (room.status === "started" && !alreadyPlaying) {
      startQuiz("challenge");
    } else {
      if (!alreadyPlaying) {
        state.started = false;
        state.questionIndex = 0;
        state.sessionQuestions = [];
      }
      saveState();
      setView("play");
      renderPlay();
    }
    startStudentRoomPolling(code);
  } catch (error) {
    state.challengeOpen = false;
    state.joined = false;
    state.started = false;
    state.challengeRoomCode = "";
    saveState();
    setView("home");
    showToast(error.message || "수업 방에 들어가지 못했어요.");
  }
}

document.querySelectorAll("[data-role-choice]").forEach((button) => button.addEventListener("click", () => enterRole(button.dataset.roleChoice)));
document.querySelectorAll("[data-role-switch]").forEach((button) => button.addEventListener("click", showRoleChooser));
document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
byId("studentRoomCode").addEventListener("input", (event) => { event.currentTarget.value = event.currentTarget.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); });
byId("joinRoomByCode").addEventListener("click", () => {
  const code = byId("studentRoomCode").value.trim().toUpperCase();
  if (!/^[A-Z0-9]{6}$/.test(code)) {
    showToast("6자리 참여 코드를 확인해 주세요.");
    return;
  }
  joinClassRoom(code);
});
byId("studentRoomCode").addEventListener("keydown", (event) => { if (event.key === "Enter") byId("joinRoomByCode").click(); });
document.querySelectorAll("[data-join-challenge]").forEach((button) => button.addEventListener("click", () => {
  setView("play");
  byId("joinChallenge").click();
}));
document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => {
  if (button.dataset.practice === "true") startQuiz("practice");
  setView(button.dataset.go);
}));

function getRank() {
  const me = { id: "me", score: state.challengePoints };
  return 1 + state.peerScores.filter((peer) => peer.score > me.score).length;
}

function renderLeaderboard() {
  const rows = [...state.peerScores.map((peer) => ({ ...peer, isMe: false })), { id: "me", name: "민서", avatar: "민", score: state.challengePoints, isMe: true }]
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
  const list = byId("leaderboard");
  list.replaceChildren();
  rows.forEach((row, index) => {
    const item = document.createElement("li");
    if (row.isMe) item.classList.add("current");
    const rank = document.createElement("span");
    rank.className = `rank-num${index < 3 ? " gold" : ""}`;
    rank.textContent = String(index + 1).padStart(2, "0");
    const avatar = document.createElement("span");
    avatar.className = "rank-avatar";
    avatar.textContent = row.avatar;
    const name = document.createElement("span");
    name.className = "rank-name";
    name.textContent = row.isMe ? "나 (민서)" : row.name;
    const score = document.createElement("span");
    score.className = "rank-score";
    score.textContent = `${row.score.toLocaleString()}점`;
    item.append(rank, avatar, name, score);
    list.append(item);
  });
}

function renderPoints() {
  byId("homePoints").innerHTML = `${state.practicePoints.toLocaleString()}<span>점</span>`;
  byId("playPoints").innerHTML = `${state.challengePoints.toLocaleString()}<small>점</small>`;
  byId("homeStreak").textContent = `${state.streak}문제`;
  byId("studentChallengeSummary").textContent = state.challengeOpen ? "과제가 열렸어요. 지금 참여할 수 있어요." : "선생님이 과제를 준비 중이에요.";
  byId("studentChallengeStatus").textContent = state.challengeOpen ? "참여 가능" : "대기 중";
  byId("studentChallengeHelp").textContent = state.challengeOpen ? "과제가 열렸어요. 늦게 들어와도 참여할 수 있어요." : "선생님이 시작하기 전까지 연습할 수 있어요.";
  renderLeaderboard();
  renderStreakDots();
}

function renderStreakDots() {
  document.querySelectorAll("#streakDots i").forEach((dot, index) => dot.classList.toggle("filled", index < state.streak));
  byId("streakCount").textContent = state.streak;
  byId("rewardHint").textContent = state.mode === "practice"
    ? "과제 참여 후 상자 보상!"
    : state.streak >= 4 ? "정답 한 번 더면 상자 보상!" : "5연속 정답이면 보물 상자!";
}

function renderPlay() {
  renderPoints();
  const states = ["introState", "lobbyState", "quizState", "resultState"];
  states.forEach((id) => { byId(id).hidden = true; });
  if (state.started && state.sessionQuestions.length) {
    if (state.questionIndex >= state.sessionQuestions.length) {
      byId("resultState").hidden = false;
      byId("stageStatus").textContent = state.mode === "challenge" ? "과제 완료" : "연습 완료";
      byId("resultPoints").textContent = `${(state.mode === "practice" ? state.practicePoints : state.challengePoints).toLocaleString()}점`;
      byId("resultScoreLabel").textContent = state.mode === "practice" ? "나의 연습 점수" : "이번 과제 점수";
      byId("resultMessage").textContent = state.mode === "warmup" ? "연습을 마쳤어요. 선생님이 시작하기 전까지 더 풀 수 있어요." : `${state.sessionQuestions.length}문제에 도전했어요. 연속 정답 ${state.streak}문제를 기록했어요.`;
      byId("returnLobby").hidden = state.mode !== "warmup";
      byId("playAgain").textContent = state.mode === "warmup" ? "연습 더 하기 ↗" : "한 번 더 도전 ↗";
    } else {
      byId("quizState").hidden = false;
      byId("stageStatus").textContent = state.mode === "practice" ? "단원 연습 중" : state.mode === "warmup" ? "대기실 연습 중" : "과제 진행 중";
      renderQuestion();
    }
  } else if (state.joined) {
    byId("lobbyState").hidden = false;
    byId("stageStatus").textContent = "선생님 시작을 기다리는 중";
    byId("readyPill").textContent = state.ready ? "준비 완료" : "참여 중";
    byId("readyText").textContent = state.ready ? "준비 완료! 대기 중에도 연습할 수 있어요." : "준비 완료를 표시하고 연습을 이어가세요.";
    byId("toggleReady").textContent = state.ready ? "준비 완료 해제" : "준비 완료 표시 ↗";
  } else {
    byId("introState").hidden = false;
    byId("stageStatus").textContent = "과제 참여 대기 중";
  }
}

function currentQuestion() {
  return state.sessionQuestions[state.questionIndex];
}

function renderQuestion() {
  const question = currentQuestion();
  if (!question) return;
  state.answered = Boolean(state.answered);
  byId("quizModeLabel").textContent = state.mode === "practice" ? "혼자 연습" : state.mode === "warmup" ? "대기실 연습" : "과제 문제";
  byId("questionNumber").textContent = `${String(state.questionIndex + 1).padStart(2, "0")} / ${String(state.sessionQuestions.length).padStart(2, "0")}`;
  byId("progressFill").style.width = `${((state.questionIndex + (state.answered ? 1 : 0)) / state.sessionQuestions.length) * 100}%`;
  byId("questionText").textContent = question.prompt;
  byId("questionSource").textContent = question.source || "교과서 문장 기반 초안";
  byId("questionSource").hidden = false;
  byId("questionFeedback").hidden = !state.answered;
  byId("nextQuestion").hidden = !state.answered;
  byId("answerOptions").replaceChildren();
  byId("answerOptions").className = "answer-options";
  byId("shortAnswerRow").hidden = true;
  if (!state.answered) {
    byId("questionFeedback").className = "question-feedback";
    byId("questionFeedback").textContent = "";
  } else {
    byId("questionFeedback").className = `question-feedback ${state.lastCorrect ? "good" : "bad"}`;
    byId("questionFeedback").textContent = state.lastCorrect
      ? `정답이에요! ${state.lastAwarded}점을 얻었어요. ${question.explanation || "교과서 내용을 다시 확인해 보세요."}`
      : `아쉬워요. 정답은 ${Array.isArray(question.answer) ? question.answer.join(" → ") : question.answer}예요. ${question.explanation || "근거 문장을 확인해 보세요."}`;
  }
  if (question.type === "short") {
    byId("shortAnswerRow").hidden = false;
    byId("shortAnswerInput").value = state.answered ? state.lastAnswer : "";
    byId("shortAnswerInput").disabled = state.answered;
    byId("submitShortAnswer").disabled = state.answered;
  } else if (question.type === "order") {
    if (!state.orderChoice.length || state.orderChoice.length !== question.answer.length) {
      state.orderChoice = [...question.answer].sort(() => Math.random() - 0.5);
    }
    renderOrderOptions(question);
  } else {
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      button.disabled = state.answered;
      const letter = document.createElement("span");
      letter.className = "option-letter";
      letter.textContent = letters[index];
      const label = document.createElement("span");
      label.textContent = choice;
      button.append(letter, label);
      if (state.answered && choice === question.answer) button.classList.add("correct");
      else if (state.answered && !state.lastCorrect && choice === state.lastAnswer) button.classList.add("wrong");
      button.addEventListener("click", () => submitAnswer(choice));
      byId("answerOptions").append(button);
    });
  }
  byId("quizPointsText").textContent = state.mode === "practice" ? "연습 정답 점수는 5~15점 사이!" : "정답마다 5~15점이 랜덤으로 쌓여요.";
  renderStreakDots();
}

function renderOrderOptions(question) {
  const container = byId("answerOptions");
  container.className = "answer-options order-options";
  state.orderChoice.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = `order-row${state.answered ? " locked" : ""}`;
    const indexMark = document.createElement("span");
    indexMark.className = "option-letter";
    indexMark.textContent = String(index + 1);
    const text = document.createElement("span");
    text.className = "order-text";
    text.textContent = item;
    const controls = document.createElement("span");
    controls.className = "order-controls";
    ["↑", "↓"].forEach((arrow, direction) => {
      const move = document.createElement("button");
      move.type = "button";
      move.className = "order-move";
      move.textContent = arrow;
      move.setAttribute("aria-label", direction === 0 ? "위로 이동" : "아래로 이동");
      move.disabled = state.answered || (direction === 0 ? index === 0 : index === state.orderChoice.length - 1);
      move.addEventListener("click", () => {
        const destination = direction === 0 ? index - 1 : index + 1;
        [state.orderChoice[index], state.orderChoice[destination]] = [state.orderChoice[destination], state.orderChoice[index]];
        renderOrderOptions(question);
        saveState();
      });
      controls.append(move);
    });
    row.append(indexMark, text, controls);
    container.append(row);
  });
  if (!state.answered) {
    const submit = document.createElement("button");
    submit.type = "button";
    submit.className = "button button-ink order-submit";
    submit.textContent = "순서 확인";
    submit.addEventListener("click", () => submitAnswer(state.orderChoice));
    container.append(submit);
  }
}

function submitAnswer(value) {
  if (state.answered) return;
  const question = currentQuestion();
  const correct = question.type === "order"
    ? JSON.stringify(value) === JSON.stringify(question.answer)
    : String(value).trim().replaceAll(" ", "") === String(question.answer).trim().replaceAll(" ", "");
  state.answered = true;
  state.lastAnswer = value;
  state.lastCorrect = correct;
  const feedback = byId("questionFeedback");
  feedback.hidden = false;
  feedback.className = `question-feedback ${correct ? "good" : "bad"}`;
  const awarded = correct ? Math.floor(Math.random() * 11) + 5 : 0;
  state.lastAwarded = awarded;
  if (correct) {
    state.streak += 1;
    if (state.mode === "practice") state.practicePoints += awarded;
    else state.challengePoints += awarded;
    feedback.textContent = `정답이에요! ${awarded}점을 얻었어요. ${question.explanation || "교과서 내용을 다시 확인해 보세요."}`;
    sprinkleConfetti(12);
  } else {
    state.streak = 0;
    feedback.textContent = `아쉬워요. 정답은 ${Array.isArray(question.answer) ? question.answer.join(" → ") : question.answer}예요. ${question.explanation || "근거 문장을 확인해 보세요."}`;
  }
  if (question.type === "mc") {
    document.querySelectorAll(".answer-option").forEach((button) => {
      button.disabled = true;
      const label = button.lastElementChild.textContent;
      if (label === question.answer) button.classList.add("correct");
      else if (label === value && !correct) button.classList.add("wrong");
    });
  } else if (question.type === "order") {
    byId("answerOptions").replaceChildren();
    renderOrderOptions(question);
  } else {
    byId("shortAnswerInput").disabled = true;
    byId("submitShortAnswer").disabled = true;
  }
  saveState();
  renderPoints();
  renderQuestion();
  if (correct && state.streak >= 5) {
    state.streak = 0;
    saveState();
    renderQuestion();
    if (state.mode === "practice") showToast("5연속 정답이에요! 과제에 참여하면 미스터리 상자 보상에 도전할 수 있어요.");
    else setTimeout(openReward, 450);
  }
}

function startQuiz(mode) {
  state.mode = mode;
  state.started = true;
  if (mode !== "practice") state.joined = true;
  state.questionIndex = 0;
  state.answered = false;
  state.lastAnswer = "";
  state.lastCorrect = false;
  state.lastAwarded = 0;
  state.orderChoice = [];
  const approved = state.approvedQuestions || [];
  const questionPool = mode === "practice" || mode === "warmup"
    ? [...warmupQuestions]
    : state.taskQuestions.length ? [...state.taskQuestions] : approved.length ? [...approved] : [...sampleQuestions];
  state.sessionQuestions = questionPool.slice(0, Math.min(10, questionPool.length));
  saveState();
  setView("play");
  renderPlay();
}

byId("joinChallenge").addEventListener("click", () => {
  state.joined = true;
  state.ready = false;
  state.mode = "challenge";
  if (state.challengeOpen) {
    startQuiz("challenge");
    showToast("열린 과제에 참여했어요. 자기 속도로 풀어보세요.");
  } else {
    state.started = false;
    saveState();
    renderPlay();
    showToast("과제 대기실에 참여했어요. 기다리는 동안 연습해 보세요.");
  }
});
byId("soloPractice").addEventListener("click", () => startQuiz("practice"));
byId("waitingPractice").addEventListener("click", () => startQuiz("warmup"));
byId("toggleReady").addEventListener("click", () => {
  state.ready = !state.ready;
  saveState();
  renderPlay();
  showToast(state.ready ? "선생님에게 준비 완료를 알렸어요." : "준비 상태를 해제했어요.");
});
byId("teacherStart").addEventListener("click", () => {
  if (state.challengeRoomCode && state.challengeOpen) openRoomShare(state.challengeRoomCode);
  else createClassRoom();
});
byId("startRoomTask").addEventListener("click", async () => {
  if (!state.challengeRoomCode) return;
  try {
    const room = await roomRequest(`/api/rooms/${state.challengeRoomCode}/start`, "POST", {});
    state.challengeOpen = true;
    updateRoomShare(room);
    showToast("과제가 시작됐어요. QR이나 코드로 계속 참여할 수 있어요.");
  } catch (error) {
    showToast(error.message || "과제를 시작하지 못했어요.");
  }
});
byId("closeRoomTask").addEventListener("click", async () => {
  if (!state.challengeRoomCode) return;
  try {
    await roomRequest(`/api/rooms/${state.challengeRoomCode}/close`, "POST", {});
    state.challengeOpen = false;
    state.roomStatus = "closed";
    saveState();
    byId("roomShareOverlay").hidden = true;
    stopTeacherRoomPolling();
    renderTeacherHome();
    showToast("수업 방을 닫았어요.");
  } catch (error) {
    showToast(error.message || "수업 방을 닫지 못했어요.");
  }
});
byId("closeRoomShare").addEventListener("click", () => {
  byId("roomShareOverlay").hidden = true;
  stopTeacherRoomPolling();
});
byId("roomShareOverlay").addEventListener("click", (event) => {
  if (event.target === byId("roomShareOverlay")) {
    byId("roomShareOverlay").hidden = true;
    stopTeacherRoomPolling();
  }
});
byId("copyRoomLink").addEventListener("click", async () => {
  const link = byId("roomShareOverlay").dataset.inviteLink;
  try {
    await navigator.clipboard.writeText(link);
    showToast("학생 초대 링크를 복사했어요.");
  } catch {
    showToast(link);
  }
});
byId("nextQuestion").addEventListener("click", () => {
  state.questionIndex += 1;
  state.answered = false;
  state.lastAnswer = "";
  state.lastCorrect = false;
  state.lastAwarded = 0;
  state.orderChoice = [];
  if (state.questionIndex >= state.sessionQuestions.length) {
    state.started = true;
  }
  saveState();
  renderPlay();
});
byId("playAgain").addEventListener("click", () => startQuiz(state.mode));
byId("returnLobby").addEventListener("click", () => {
  state.mode = "challenge";
  state.started = false;
  state.questionIndex = 0;
  state.answered = false;
  state.sessionQuestions = [];
  state.orderChoice = [];
  saveState();
  renderPlay();
});
byId("submitShortAnswer").addEventListener("click", () => submitAnswer(byId("shortAnswerInput").value));
byId("shortAnswerInput").addEventListener("keydown", (event) => { if (event.key === "Enter") submitAnswer(event.currentTarget.value); });

function makeChestRewards() {
  const canDouble = getRank() > 5;
  const rewards = [];
  for (let i = 0; i < 3; i += 1) {
    const roll = Math.random();
    if (canDouble && roll < 0.28) rewards.push("double");
    else if (roll < (canDouble ? 0.64 : 0.55)) rewards.push("swap");
    else rewards.push("hundred");
  }
  return rewards;
}

function chestSvg() {
  return `<svg viewBox="0 0 100 74" fill="none" aria-hidden="true"><path d="M12 31h76v36H12z" fill="#C86B42" stroke="#713E2D" stroke-width="4"/><path d="M9 30c0-13 9-22 21-22h40c12 0 21 9 21 22v6H9v-6Z" fill="#E38B55" stroke="#713E2D" stroke-width="4"/><path d="M43 35h14v18H43z" fill="#F6D16F" stroke="#713E2D" stroke-width="3"/><path d="M18 47h64" stroke="#713E2D" stroke-width="3"/></svg>`;
}

let chestRewards = [];
let selectedBox = -1;
function openReward() {
  chestRewards = makeChestRewards();
  selectedBox = -1;
  byId("rewardReveal").hidden = true;
  byId("rewardReveal").replaceChildren();
  byId("swapPicker").hidden = true;
  const options = byId("chestOptions");
  options.replaceChildren();
  chestRewards.forEach((reward, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chest-choice";
    button.innerHTML = `${chestSvg()}<span>상자 ${index + 1}</span>`;
    button.addEventListener("click", () => chooseChest(index, button));
    options.append(button);
  });
  byId("rewardOverlay").hidden = false;
}

function chooseChest(index, selectedButton) {
  if (selectedBox !== -1) return;
  selectedBox = index;
  document.querySelectorAll(".chest-choice").forEach((button) => { button.disabled = true; });
  selectedButton.style.background = "#f8edcf";
  const reward = chestRewards[index];
  const reveal = byId("rewardReveal");
  reveal.replaceChildren();
  reveal.hidden = false;
  if (reward === "double") {
    state.challengePoints *= 2;
    const points = document.createElement("span");
    points.className = "reward-number";
    points.textContent = "× 2";
    reveal.append(points, document.createTextNode("이번 과제 점수가 두 배가 됐어요!"));
  } else if (reward === "hundred") {
    state.challengePoints += 100;
    const points = document.createElement("span");
    points.className = "reward-number";
    points.textContent = "+100점";
    reveal.append(points, document.createTextNode("보물 점수 100점을 얻었어요!"));
  } else {
    reveal.textContent = "친구와 점수를 바꿀 수 있어요.";
    renderFriendPicker();
  }
  saveState();
  renderPoints();
}

function renderFriendPicker() {
  const picker = byId("swapPicker");
  const container = byId("friendOptions");
  container.replaceChildren();
  picker.hidden = false;
  state.peerScores.forEach((friend) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "friend-button";
    button.textContent = `${friend.name} · ${friend.score}점`;
    button.addEventListener("click", () => {
      const previous = state.challengePoints;
      state.challengePoints = friend.score;
      friend.score = previous;
      saveState();
      renderPoints();
      picker.hidden = true;
      byId("rewardReveal").textContent = `${friend.name} 친구와 이번 과제 점수를 바꿨어요.`;
      showToast("점수를 교환했어요.");
    });
    container.append(button);
  });
}

function closeReward() {
  if (selectedBox === -1 || !byId("swapPicker").hidden) {
    showToast("상자를 고르고 보상을 마무리해 주세요.");
    return;
  }
  byId("rewardOverlay").hidden = true;
}
byId("closeReward").addEventListener("click", closeReward);
byId("rewardOverlay").addEventListener("click", (event) => { if (event.target === byId("rewardOverlay")) closeReward(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !byId("rewardOverlay").hidden) closeReward(); });

function sprinkleConfetti(amount = 18) {
  const layer = byId("confettiLayer");
  const palette = ["#e8b94d", "#db7758", "#7fa88a", "#6e9ca7", "#e2c78a"];
  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = palette[i % palette.length];
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    layer.append(piece);
    setTimeout(() => piece.remove(), 2400);
  }
}

const factRules = [
  { id: "wanggeon-found", answer: "왕건", needs: ["왕건", "고려"], cues: ["세우", "건국", "후삼국통일"], prompt: "고려를 세운 인물은 누구인가요?", choices: ["왕건", "궁예", "견훤", "광종"] },
  { id: "wanggeon-unify", answer: "왕건", needs: ["왕건", "후삼국", "통일"], prompt: "후삼국을 통일한 고려의 왕은 누구인가요?", choices: ["왕건", "궁예", "견훤", "광종"] },
  { id: "nobi", answer: "노비안검법", needs: ["광종", "노비안검법"], prompt: "광종이 시행한 노비 관련 제도는 무엇인가요?", choices: ["노비안검법", "과거제", "전시과", "음서"] },
  { id: "exam", answer: "과거제", needs: ["광종", "과거제"], prompt: "광종 때 관리 선발을 위해 실시한 제도는 무엇인가요?", choices: ["과거제", "음서", "전시과", "노비안검법"] },
  { id: "seohee", answer: "서희", needs: ["서희", "강동", "6주"], prompt: "거란과의 담판으로 강동 6주를 확보한 인물은 누구인가요?", choices: ["서희", "강감찬", "윤관", "양규"] },
  { id: "ganggamchan", answer: "강감찬", needs: ["강감찬", "귀주"], cues: ["대첩", "전투"], prompt: "귀주대첩을 승리로 이끈 장군은 누구인가요?", choices: ["강감찬", "서희", "윤관", "양규"] },
  { id: "jeonsigwa", answer: "전시과", needs: ["전시과"], cuesAll: ["관리"], cues: ["토지", "전지", "시지"], prompt: "고려에서 관리에게 토지를 지급한 제도는 무엇인가요?", choices: ["전시과", "과거제", "음서", "노비안검법"] },
  { id: "palmandaejanggyeong", answer: "팔만대장경", needs: ["팔만대장경", "몽골", "침입"], cues: ["새기", "판각"], prompt: "몽골 침입 시기에 새긴 대장경은 무엇인가요?", choices: ["팔만대장경", "초조대장경", "직지", "삼국사기"] },
  { id: "gongmin", answer: "공민왕", needs: ["공민왕", "쌍성총관부"], cues: ["되찾", "수복", "탈환"], prompt: "쌍성총관부를 되찾은 고려의 왕은 누구인가요?", choices: ["공민왕", "광종", "성종", "충렬왕"] },
  { id: "seongjong", answer: "12목", needs: ["성종", "12목"], prompt: "성종 때 지방에 설치한 주요 행정 구역은 몇 목인가요?", choices: ["12목", "5도", "3경", "8목"] },
  { id: "yun-gwan-byeolmuban", answer: "윤관", needs: ["윤관", "별무반"], prompt: "별무반을 편성한 인물은 누구인가요?", choices: ["윤관", "강감찬", "서희", "척준경"] },
  { id: "yun-gwan-nine-castles", answer: "윤관", needs: ["윤관", "동북", "9성"], prompt: "동북 9성 축조를 주도한 인물은 누구인가요?", choices: ["윤관", "강감찬", "서희", "척준경"] },
  { id: "myocheong", answer: "묘청", needs: ["묘청", "서경", "천도"], prompt: "서경 천도를 주장한 인물은 누구인가요?", choices: ["묘청", "김부식", "최충헌", "이자겸"] },
  { id: "choe-chungheon", answer: "최충헌", needs: ["최충헌", "교정도감"], prompt: "교정도감을 설치한 무신 집권자는 누구인가요?", choices: ["최충헌", "이의민", "정중부", "최우"] },
  { id: "sambyeolcho", answer: "삼별초", needs: ["삼별초", "몽골"], cues: ["강화", "항쟁"], prompt: "몽골과의 강화에 반대해 항쟁한 군사 집단은 무엇인가요?", choices: ["삼별초", "별무반", "도방", "광군"] },
];

async function readPdf(file) {
  if (!window.pdfjsLib) throw new Error("PDF 읽기 도구를 불러오지 못했어요. 인터넷 연결을 확인하고 다시 시도해 주세요.");
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  const pdf = await window.pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
  const pages = [];
  for (let number = 1; number <= pdf.numPages; number += 1) {
    const page = await pdf.getPage(number);
    const text = await page.getTextContent();
    pages.push(text.items.map((item) => `${item.str}${item.hasEOL ? "\n" : " "}`).join("").replace(/[ \t]+/g, " "));
  }
  return { pages, count: pdf.numPages };
}

async function selectPdf(file) {
  if (!file) return;
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    showToast("PDF 파일을 선택해 주세요.");
    return;
  }
  if (file.size > 20 * 1024 * 1024) {
    showToast("20MB 이하의 PDF를 선택해 주세요.");
    return;
  }
  activeFile = file;
  byId("fileName").textContent = file.name;
  byId("pageCount").textContent = "PDF 본문을 읽는 중...";
  byId("uploadMeta").hidden = false;
  byId("dropZone").hidden = true;
  byId("generateButton").disabled = true;
  try {
    const result = await readPdf(file);
    pdfPages = result.pages;
    byId("pageCount").textContent = `${result.count}페이지 · 브라우저에서 읽음`;
    byId("generateButton").disabled = false;
    showToast("PDF를 읽었어요. 문제 초안을 만들어 보세요.");
  } catch (error) {
    pdfPages = [];
    byId("pageCount").textContent = "본문을 읽지 못했어요";
    showToast(error.message || "PDF를 읽지 못했어요.");
  }
}

byId("pdfInput").addEventListener("change", (event) => selectPdf(event.target.files[0]));
byId("dropZone").addEventListener("dragover", (event) => { event.preventDefault(); byId("dropZone").classList.add("dragover"); });
byId("dropZone").addEventListener("dragleave", () => byId("dropZone").classList.remove("dragover"));
byId("dropZone").addEventListener("drop", (event) => { event.preventDefault(); byId("dropZone").classList.remove("dragover"); selectPdf(event.dataTransfer.files[0]); });
byId("removePdf").addEventListener("click", () => {
  activeFile = null;
  pdfPages = [];
  byId("pdfInput").value = "";
  byId("uploadMeta").hidden = true;
  byId("dropZone").hidden = false;
  byId("generateButton").disabled = true;
});
byId("generateButton").addEventListener("click", async () => {
  const count = Number(byId("questionCount").value);
  const enabledTypes = [...document.querySelectorAll(".type-choice:checked")].map((input) => input.value);
  if (pdfPages.join("").trim().length < 30) {
    showToast("PDF에서 읽을 수 있는 글자가 거의 없어요. 스캔본이면 OCR된 PDF를 사용해 주세요.");
    return;
  }
  if (!enabledTypes.length) {
    showToast("출제 유형을 하나 이상 선택해 주세요.");
    return;
  }
  const button = byId("generateButton");
  const originalContent = button.innerHTML;
  button.disabled = true;
  button.textContent = "Solar AI가 근거를 확인하고 있어요...";
  byId("draftSummary").textContent = "교과서 근거를 확인해 문제 초안을 만드는 중이에요.";
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pages: pdfPages, count, types: enabledTypes, unit: byId("unitName").value.trim() }),
    });
    let result;
    try {
      result = await response.json();
    } catch {
      throw new Error("문제 생성 서버에서 읽을 수 없는 응답을 받았어요.");
    }
    if (!response.ok) throw new Error(result.error || "문제를 만들지 못했어요. 다시 시도해 주세요.");
    draftQuestions = (result.questions || []).map((question) => ({
      ...question,
      source: question.evidence.map((item) => `PDF ${item.page}쪽 · “${item.quote}”`).join(" / "),
      approved: true,
    }));
    renderDrafts();
    if (!draftQuestions.length) showToast("근거 문장을 확인할 수 있는 문제가 없어요. PDF의 글자와 페이지를 확인해 주세요.");
    else if (result.rejected) showToast(`${draftQuestions.length}개 초안을 만들었어요. 근거 검증에서 제외된 문항 ${result.rejected}개가 있어요.`);
    else if (draftQuestions.length < count) showToast(`근거가 확인된 ${draftQuestions.length}개 초안만 만들었어요. 부족한 문항은 억지로 채우지 않았어요.`);
    else showToast(`${draftQuestions.length}개 문제 초안을 만들었어요. 근거와 정답을 검토해 주세요.`);
  } catch (error) {
    byId("draftSummary").textContent = "PDF를 올리면 출제 초안이 여기에 보여요.";
    showToast(error.message || "Solar AI 문제 생성에 실패했어요.");
  } finally {
    button.innerHTML = originalContent;
    button.disabled = !pdfPages.length;
  }
});
byId("loadSample").addEventListener("click", () => {
  draftQuestions = sampleQuestions.slice(0, 5).map((question) => ({ ...question, source: "예시 자료 · 고려 역사 기본 문제", approved: true }));
  renderDrafts();
  showToast("예시 문제 5개를 불러왔어요.");
});

function renderDrafts() {
  const list = byId("draftList");
  list.replaceChildren();
  byId("emptyDrafts").hidden = draftQuestions.length > 0;
  byId("draftFooter").hidden = draftQuestions.length === 0;
  byId("approveAll").hidden = draftQuestions.length === 0;
  const typeCounts = draftQuestions.reduce((counts, question) => ({ ...counts, [question.type]: (counts[question.type] || 0) + 1 }), {});
  const typeSummary = [["mc", "객관식"], ["short", "단답형"], ["order", "순서 맞추기"]].filter(([type]) => typeCounts[type]).map(([type, label]) => `${label} ${typeCounts[type]}개`).join(" · ");
  byId("draftSummary").textContent = draftQuestions.length
    ? `근거가 확인된 ${draftQuestions.length}개 초안 · ${typeSummary}. 문항과 보기를 검토해 주세요.`
    : "PDF를 올리면 출제 초안이 여기에 보여요.";
  draftQuestions.forEach((question) => {
    const article = document.createElement("article");
    article.className = "draft-card";
    const content = document.createElement("div");
    const type = document.createElement("span");
    type.className = "draft-type";
    type.textContent = question.type === "order" ? "순서 맞추기" : question.type === "short" ? "단답형" : "객관식";
    const promptField = document.createElement("label");
    promptField.className = "draft-editor";
    const promptLabel = document.createElement("span");
    promptLabel.textContent = "문제";
    const prompt = document.createElement("textarea");
    prompt.rows = 2;
    prompt.value = question.prompt;
    prompt.addEventListener("input", () => { question.prompt = prompt.value; });
    promptField.append(promptLabel, prompt);
    content.append(type, promptField);
    if (question.type === "mc") {
      const choicesField = document.createElement("label");
      choicesField.className = "draft-editor";
      const choicesLabel = document.createElement("span");
      choicesLabel.textContent = "보기 (한 줄에 하나씩)";
      const choices = document.createElement("textarea");
      choices.rows = 3;
      choices.value = question.choices.join("\n");
      choices.addEventListener("input", () => { question.choices = choices.value.split("\n").map((choice) => choice.trim()).filter(Boolean); });
      choicesField.append(choicesLabel, choices);
      content.append(choicesField);
    }
    const answerField = document.createElement("label");
    answerField.className = "draft-editor";
    const answerLabel = document.createElement("span");
    answerLabel.textContent = question.type === "order" ? "정답 순서 (한 줄에 하나씩)" : "정답";
    const answer = question.type === "order" ? document.createElement("textarea") : document.createElement("input");
    if (question.type === "order") {
      answer.rows = 3;
      answer.value = question.answer.join("\n");
      answer.addEventListener("input", () => { question.answer = answer.value.split("\n").map((item) => item.trim()).filter(Boolean); });
    } else {
      answer.type = "text";
      answer.value = question.answer;
      answer.addEventListener("input", () => { question.answer = answer.value; });
    }
    answerField.append(answerLabel, answer);
    content.append(answerField);
    if (question.explanation) {
      const explanation = document.createElement("p");
      explanation.className = "draft-explanation";
      explanation.textContent = `해설: ${question.explanation}`;
      content.append(explanation);
    }
    const source = document.createElement("span");
    source.className = "draft-source";
    source.textContent = question.source || "PDF 근거 문장";
    content.append(source);
    const label = document.createElement("label");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = question.approved !== false;
    check.addEventListener("change", () => { question.approved = check.checked; updateApprovedCount(); });
    label.append(check, document.createTextNode("승인"));
    article.append(content, label);
    list.append(article);
  });
  updateApprovedCount();
}

function updateApprovedCount() {
  const count = draftQuestions.filter((question) => question.approved !== false).length;
  byId("approvedCount").textContent = `승인된 문제 ${count}개`;
}

byId("approveAll").addEventListener("click", () => {
  draftQuestions.forEach((question) => { question.approved = true; });
  renderDrafts();
  showToast("모든 문제 초안을 승인했어요.");
});

function getBlooketOptions(question) {
  if (question.type === "mc") return { choices: [...question.choices], answer: question.answer };
  if (question.type === "short") {
    const banks = [...sampleQuestions, ...warmupQuestions, ...factRules];
    const bank = banks.find((item) => item.answer === question.answer && item.choices?.length >= 2);
    return bank ? { choices: [...bank.choices], answer: question.answer } : null;
  }
  if (question.type === "order" && question.answer.length >= 3) {
    const correct = [...question.answer];
    const variants = [
      [...correct].reverse(),
      [...correct.slice(1), correct[0]],
      [correct[1], correct[0], ...correct.slice(2)],
    ];
    const choices = [correct, ...variants]
      .map((sequence) => sequence.join(" → "))
      .filter((sequence, index, all) => all.indexOf(sequence) === index);
    return choices.length >= 2 ? { choices, answer: correct.join(" → ") } : null;
  }
  return null;
}

function shuffleChoices(choices) {
  const shuffled = [...choices];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

byId("downloadBlooket").addEventListener("click", () => {
  const approved = draftQuestions.filter((question) => question.approved !== false);
  if (!approved.length) {
    showToast("엑셀로 내보낼 문제를 하나 이상 승인해 주세요.");
    return;
  }
  if (!window.XLSX) {
    showToast("엑셀 저장 도구를 불러오지 못했어요. 인터넷 연결을 확인해 주세요.");
    return;
  }
  const headers = ["Question #", "Question Text", "Answer 1", "Answer 2 (Optional)", "Answer 3 (Optional)", "Answer 4 (Optional)", "Time Limit (Max 300 Seconds)", "Correct Answer(s) (Only Include Answer #)"];
  let skipped = 0;
  const records = approved.flatMap((question) => {
    const entry = getBlooketOptions(question);
    if (!entry || !question.prompt.trim()) {
      skipped += 1;
      return [];
    }
    const availableChoices = [...new Set(entry.choices.map((choice) => String(choice).trim()).filter(Boolean))];
    const limitedChoices = availableChoices.slice(0, 4);
    if (!limitedChoices.includes(entry.answer)) limitedChoices.splice(3, 1, entry.answer);
    const choices = shuffleChoices(limitedChoices);
    const answerIndex = choices.findIndex((choice) => choice === entry.answer);
    if (answerIndex < 0) {
      skipped += 1;
      return [];
    }
    return [[question.prompt.trim(), ...choices.slice(0, 4), ...Array(Math.max(0, 4 - choices.length)).fill(""), 20, answerIndex + 1]];
  });
  if (!records.length) {
    showToast("블루킷 객관식으로 변환할 수 있는 승인 문제가 없어요.");
    return;
  }
  const rows = records.map((record, index) => [index + 1, ...record]);
  const sheet = window.XLSX.utils.aoa_to_sheet([headers, ...rows]);
  sheet["!cols"] = [{ wch: 12 }, { wch: 58 }, { wch: 32 }, { wch: 32 }, { wch: 32 }, { wch: 32 }, { wch: 24 }, { wch: 48 }];
  const workbook = window.XLSX.utils.book_new();
  window.XLSX.utils.book_append_sheet(workbook, sheet, "Questions");
  const unit = byId("unitName").value.trim().replace(/[\\/:*?"<>|]/g, "-") || "Goryeo_Quiz";
  window.XLSX.writeFile(workbook, `Blooket_${unit}.xlsx`);
  showToast(skipped ? `${records.length}개 문제를 저장했어요. 형식 변환이 어려운 ${skipped}개는 제외했어요.` : `${records.length}개 문제를 블루킷 업로드용 엑셀로 저장했어요.`);
});

byId("publishQuestions").addEventListener("click", () => {
  const approved = draftQuestions.filter((question) => question.approved !== false);
  if (!approved.length) {
    showToast("퀴즈에 사용할 문제를 하나 이상 승인해 주세요.");
    return;
  }
  const invalid = approved.find((question) => !question.prompt.trim()
    || (question.type === "mc" && (question.choices.length < 2 || question.choices.length > 4 || !question.choices.includes(question.answer)))
    || (question.type === "short" && !question.answer.trim())
    || (question.type === "order" && question.answer.length < 3));
  if (invalid) {
    showToast("승인한 문제의 보기와 정답이 맞는지 확인해 주세요.");
    return;
  }
  state.approvedQuestions = approved;
  saveState();
  renderTeacherHome();
  showToast(`${approved.length}개 문제를 교사 문제함에 저장했어요.`);
  setView("teacherHome");
});

async function bootApp() {
  renderPoints();
  renderPlay();
  const inviteCode = new URLSearchParams(window.location.search).get("join")?.trim().toUpperCase();
  if (inviteCode && /^[A-Z0-9]{6}$/.test(inviteCode)) {
    state.activeRole = "student";
    state.challengeRoomCode = inviteCode;
    state.joined = true;
    state.started = false;
    state.mode = "challenge";
    saveState();
    window.history.replaceState({}, "", window.location.pathname);
    enterRole("student");
    await joinClassRoom(inviteCode);
    return;
  }
  if (state.activeRole === "student") {
    enterRole("student");
    if (state.challengeRoomCode && state.joined) await joinClassRoom(state.challengeRoomCode);
  } else if (state.activeRole === "teacher") {
    enterRole("teacher");
    if (state.challengeRoomCode && state.challengeOpen) pollTeacherRoom(state.challengeRoomCode);
  } else {
    showRoleChooser();
  }
}

bootApp();
