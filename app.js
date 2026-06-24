const API_URL = "http://127.0.0.1:8000/api";
const STATIC_DEMO = location.hostname.endsWith("github.io");

const labels = {
  full_time: "Очная",
  part_time: "Заочная",
  mixed: "Очно-заочная",
  evening: "Вечерняя",
  active: "Обучается",
  academic_leave: "Академ",
  expelled: "Отчислен",
  graduated: "Выпускник",
  budget: "Бюджет",
  contract: "Договор",
  targeted: "Целевое",
  present: "Присутствовал",
  excused_absence: "Уважительная",
  unexcused_absence: "Прогул",
  open: "Открыта",
  closed: "Закрыта",
  archived: "Архив",
  exam: "Экзамен",
  credit: "Зачет",
  differentiated_credit: "Дифзачет",
  coursework: "Курсовая",
  enrollment: "Зачисление",
  expulsion: "Отчисление",
  transfer: "Перевод",
  restoration: "Восстановление",
  graduation: "Выпуск",
  отлично: "Отлично",
  хорошо: "Хорошо",
  неуд: "Неуд",
  незачет: "Незачет",
  зачет: "Зачет",
};

const demo = {
  summary: { active_students: 14, groups: 3, open_statements: 2, debts: 3, orders: 4 },
  forms: [
    { form: "full_time", value: 12 },
    { form: "part_time", value: 4 },
    { form: "mixed", value: 3 },
    { form: "evening", value: 2 },
  ],
  attendance: {
    totals: [
      { status: "present", value: 120 },
      { status: "excused_absence", value: 18 },
      { status: "unexcused_absence", value: 11 },
    ],
    by_group: [
      { group_name: "ИС-21", present_count: 44, excused_count: 5, unexcused_count: 3, total_count: 52 },
      { group_name: "ПИ-20", present_count: 39, excused_count: 7, unexcused_count: 4, total_count: 50 },
      { group_name: "ЭК-22", present_count: 37, excused_count: 6, unexcused_count: 4, total_count: 47 },
    ],
  },
  analytics: {
    grades: [
      { grade_value: "отлично", value: 24 },
      { grade_value: "хорошо", value: 38 },
      { grade_value: "неуд", value: 3 },
      { grade_value: "зачет", value: 31 },
    ],
    debts_by_group: [
      { group_name: "ИС-21", debts_count: 1 },
      { group_name: "ПИ-20", debts_count: 2 },
      { group_name: "ЭК-22", debts_count: 0 },
    ],
    orders_by_type: [
      { order_type: "enrollment", value: 2 },
      { order_type: "transfer", value: 1 },
      { order_type: "graduation", value: 1 },
    ],
    students_by_status: [
      { status: "active", value: 14 },
      { status: "academic_leave", value: 1 },
      { status: "expelled", value: 2 },
      { status: "graduated", value: 4 },
    ],
  },
  students: [
    { last_name: "Иванов", first_name: "Алексей", middle_name: "Сергеевич", group_name: "ИС-21", record_book_number: "ИС-21001", status: "active", form: "full_time", funding: "budget", specialty_name: "Информационные системы" },
    { last_name: "Кузнецова", first_name: "Анна", middle_name: "Павловна", group_name: "ИС-21", record_book_number: "ИС-21009", status: "active", form: "full_time", funding: "targeted", specialty_name: "Информационные системы" },
    { last_name: "Морозов", first_name: "Даниил", middle_name: "Андреевич", group_name: "ИС-21", record_book_number: "ИС-21012", status: "active", form: "full_time", funding: "budget", specialty_name: "Информационные системы" },
    { last_name: "Григорьев", first_name: "Никита", middle_name: "Артемович", group_name: "ИС-21", record_book_number: "ИС-21016", status: "active", form: "evening", funding: "budget", specialty_name: "Информационные системы" },
    { last_name: "Волкова", first_name: "Екатерина", middle_name: "Ильинична", group_name: "ИС-21", record_book_number: "ИС-21021", status: "active", form: "mixed", funding: "contract", specialty_name: "Информационные системы" },
    { last_name: "Смирнова", first_name: "Полина", middle_name: "Олеговна", group_name: "ИС-21", record_book_number: "ИС-19004", status: "graduated", form: "full_time", funding: "budget", specialty_name: "Информационные системы" },
    { last_name: "Орлов", first_name: "Матвей", middle_name: "Русланович", group_name: "ИС-21", record_book_number: "ИС-20018", status: "expelled", form: "part_time", funding: "contract", specialty_name: "Информационные системы" },
    { last_name: "Петрова", first_name: "Мария", middle_name: "Игоревна", group_name: "ПИ-20", record_book_number: "ПИ-20007", status: "active", form: "full_time", funding: "contract", specialty_name: "Прикладная информатика" },
    { last_name: "Федоров", first_name: "Артем", middle_name: "Викторович", group_name: "ПИ-20", record_book_number: "ПИ-20011", status: "active", form: "full_time", funding: "budget", specialty_name: "Прикладная информатика" },
    { last_name: "Лебедева", first_name: "Алина", middle_name: "Сергеевна", group_name: "ПИ-20", record_book_number: "ПИ-20014", status: "active", form: "mixed", funding: "targeted", specialty_name: "Прикладная информатика" },
    { last_name: "Васильев", first_name: "Илья", middle_name: "Петрович", group_name: "ПИ-20", record_book_number: "ПИ-20019", status: "active", form: "evening", funding: "contract", specialty_name: "Прикладная информатика" },
    { last_name: "Романова", first_name: "Софья", middle_name: "Дмитриевна", group_name: "ПИ-20", record_book_number: "ПИ-20023", status: "active", form: "full_time", funding: "budget", specialty_name: "Прикладная информатика" },
    { last_name: "Николаева", first_name: "Вера", middle_name: "Алексеевна", group_name: "ПИ-20", record_book_number: "ПИ-19008", status: "academic_leave", form: "mixed", funding: "budget", specialty_name: "Прикладная информатика" },
    { last_name: "Демидов", first_name: "Роман", middle_name: "Игоревич", group_name: "ПИ-20", record_book_number: "ПИ-18002", status: "graduated", form: "full_time", funding: "budget", specialty_name: "Прикладная информатика" },
    { last_name: "Андреев", first_name: "Кирилл", middle_name: "Максимович", group_name: "ЭК-22", record_book_number: "ЭК-22001", status: "active", form: "full_time", funding: "budget", specialty_name: "Экономика" },
    { last_name: "Соколова", first_name: "Дарья", middle_name: "Романовна", group_name: "ЭК-22", record_book_number: "ЭК-22003", status: "active", form: "part_time", funding: "contract", specialty_name: "Экономика" },
    { last_name: "Захаров", first_name: "Павел", middle_name: "Ильич", group_name: "ЭК-22", record_book_number: "ЭК-22006", status: "active", form: "part_time", funding: "budget", specialty_name: "Экономика" },
    { last_name: "Мельников", first_name: "Степан", middle_name: "Алексеевич", group_name: "ЭК-22", record_book_number: "ЭК-22009", status: "active", form: "full_time", funding: "targeted", specialty_name: "Экономика" },
    { last_name: "Сидоренко", first_name: "Никита", middle_name: "Олегович", group_name: "ЭК-22", record_book_number: "ЭК-20004", status: "graduated", form: "part_time", funding: "budget", specialty_name: "Экономика" },
    { last_name: "Егорова", first_name: "Марина", middle_name: "Владимировна", group_name: "ЭК-22", record_book_number: "ЭК-19007", status: "graduated", form: "full_time", funding: "budget", specialty_name: "Экономика" },
    { last_name: "Сидоров", first_name: "Никита", middle_name: "Олегович", group_name: "ЭК-22", record_book_number: "ЭК-22004", status: "expelled", form: "full_time", funding: "budget", specialty_name: "Экономика" },
  ],
  groups: [
    { id: "demo-is", name: "ИС-21", specialty_name: "Информационные системы", set_year: 2021, students_count: 7, active_count: 5 },
    { id: "demo-pi", name: "ПИ-20", specialty_name: "Прикладная информатика", set_year: 2020, students_count: 7, active_count: 5 },
    { id: "demo-ek", name: "ЭК-22", specialty_name: "Экономика", set_year: 2022, students_count: 7, active_count: 4 },
  ],
  statements: [
    { statement_number: "В-2026-014", statement_date: "2026-05-18", group_name: "ИС-21", discipline_name: "Базы данных", teacher_name: "Смирнов А. В.", grades_count: 6, debts_count: 0, status: "closed" },
    { statement_number: "В-2026-019", statement_date: "2026-05-22", group_name: "ПИ-20", discipline_name: "Проектирование ИС", teacher_name: "Орлова Е. Н.", grades_count: 3, debts_count: 2, status: "open" },
  ],
  orders: [
    { order_number: "42-У", order_date: "2026-04-12", order_type: "transfer", student_name: "Петрова Мария Игоревна", group_name: "ПИ-20", title: "О переводе на следующий курс", content: { basis: "Решение аттестационной комиссии" } },
    { order_number: "57-У", order_date: "2026-05-15", order_type: "graduation", student_name: "Иванов Алексей Сергеевич", group_name: "ИС-21", title: "О допуске к защите ВКР", content: { basis: "Выполнение учебного плана" } },
  ],
};

let apiOnline = false;
let studentRows = [];
let groupRows = [];
let studentSort = { key: "name", direction: "asc" };
let selectedGroup = "";

async function apiGet(path) {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) throw new Error(`API error ${response.status}`);
  return response.json();
}

async function apiPost(path, body) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.detail || `API error ${response.status}`);
  return data;
}

async function safeLoad(path, fallback) {
  if (STATIC_DEMO) {
    setConnection(false);
    return fallback;
  }
  try {
    const data = await apiGet(path);
    setConnection(true);
    return data;
  } catch {
    setConnection(false);
    return fallback;
  }
}

function text(value) {
  return labels[value] || value || "-";
}

function studentStatusClass(status) {
  const classes = {
    active: "status-green",
    graduated: "status-blue",
    academic_leave: "status-orange",
    expelled: "status-red",
  };
  return classes[status] || "status-neutral";
}

function fullName(row) {
  return [row.last_name, row.first_name, row.middle_name].filter(Boolean).join(" ");
}

function formatDate(value) {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("ru-RU");
}

function setConnection(ok) {
  apiOnline = ok;
  const node = document.getElementById("connectionStatus");
  node.classList.toggle("ok", ok);
  node.classList.toggle("offline", !ok);
  node.textContent = ok ? "API подключен: dekanat_diplom" : "API не запущен, показаны демо-данные";
}

function renderBars(targetId, rows, keyName, valueName) {
  const container = document.getElementById(targetId);
  if (!rows.length) {
    container.innerHTML = '<div class="empty">Данных пока нет</div>';
    return;
  }

  const max = Math.max(...rows.map((row) => Number(row[valueName])), 1);
  container.innerHTML = rows
    .map((row) => {
      const width = Math.max(7, (Number(row[valueName]) / max) * 100);
      return `
        <div class="bar-row">
          <div class="bar-label">
            <span>${text(row[keyName])}</span>
            <strong>${row[valueName]}</strong>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderPie(targetId, rows, keyName, valueName) {
  const container = document.getElementById(targetId);
  if (!rows.length) {
    container.innerHTML = '<div class="empty">Данных пока нет</div>';
    return;
  }

  const colors = ["#4f7cc3", "#f07a32", "#9da3aa", "#f2bd35", "#5aa0d6", "#35a99b"];
  const total = rows.reduce((sum, row) => sum + Number(row[valueName] || 0), 0);
  let current = 0;
  const segments = rows.map((row, index) => {
    const value = Number(row[valueName] || 0);
    const start = current;
    const end = current + (value / Math.max(total, 1)) * 360;
    current = end;
    return `${colors[index % colors.length]} ${start}deg ${end}deg`;
  });

  container.innerHTML = `
    <div class="pie-wrap">
      <div class="pie" style="background: conic-gradient(${segments.join(", ")});">
        <span>${total}</span>
      </div>
      <div class="pie-legend">
        ${rows
          .map((row, index) => {
            const value = Number(row[valueName] || 0);
            const percent = Math.round((value / Math.max(total, 1)) * 100);
            return `
              <div class="legend-row">
                <i style="background:${colors[index % colors.length]}"></i>
                <span>${text(row[keyName])}</span>
                <strong>${percent}%</strong>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderColumns(targetId, rows, keyName, valueName) {
  const container = document.getElementById(targetId);
  if (!rows.length) {
    container.innerHTML = '<div class="empty">Данных пока нет</div>';
    return;
  }

  const max = Math.max(...rows.map((row) => Number(row[valueName])), 1);
  container.innerHTML = `
    <div class="columns">
      ${rows
        .map((row) => {
          const value = Number(row[valueName] || 0);
          const height = Math.max(12, (value / max) * 160);
          return `
            <div class="column-item">
              <strong>${value}</strong>
              <div class="column-track">
                <div class="column-fill" style="height:${height}px"></div>
              </div>
              <span>${text(row[keyName])}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

async function loadSummary() {
  const data = await safeLoad("/dashboard/summary", demo.summary);
  document.getElementById("activeStudents").textContent = data.active_students;
  document.getElementById("groupsCount").textContent = data.groups;
  document.getElementById("openStatements").textContent = data.open_statements;
  document.getElementById("debtsCount").textContent = data.debts;
}

async function loadForms() {
  const rows = await safeLoad("/dashboard/study-forms", demo.forms);
  renderBars("formsChart", rows, "form", "value");
}

async function loadAttendance() {
  const data = await safeLoad("/dashboard/attendance", demo.attendance);
  renderBars("attendanceChart", data.totals, "status", "value");
  document.getElementById("attendanceGroups").innerHTML = data.by_group
    .map((row) => {
      const percent = row.total_count ? Math.round((row.present_count / row.total_count) * 100) : 0;
      return `
        <tr>
          <td>${row.group_name}</td>
          <td>${row.present_count}</td>
          <td>${row.excused_count}</td>
          <td>${row.unexcused_count}</td>
          <td><span class="status">${percent}%</span></td>
        </tr>
      `;
    })
    .join("");
}

async function loadAnalytics() {
  const data = await safeLoad("/dashboard/analytics", demo.analytics);
  renderPie("gradesChart", data.grades, "grade_value", "value");
  renderColumns("debtsByGroupChart", data.debts_by_group, "group_name", "debts_count");
  renderPie("ordersByTypeChart", data.orders_by_type, "order_type", "value");
  renderColumns("studentsByStatusChart", data.students_by_status, "status", "value");
}

async function loadUrgent() {
  const data = await safeLoad("/dashboard/urgent", {
    open_statements: [],
    debts: [],
    birthdays: [],
  });

  const items = [
    ...data.open_statements.map((row) => ({
      title: `${row.statement_number}: ${row.group_name}`,
      detail: `${row.discipline_name}, статус ${text(row.status)}`,
    })),
    ...data.debts.map((row) => ({
      title: `${row.student_name}, ${row.group_name}`,
      detail: `Долг по дисциплине: ${row.discipline_name}`,
    })),
    ...data.birthdays.map((row) => ({
      title: row.student_name,
      detail: `День рождения завтра, группа ${row.group_name || "-"}`,
    })),
  ];

  document.getElementById("urgentList").innerHTML = (items.length
    ? items
    : [{ title: "Критичных задач нет", detail: "Можно спокойно закрывать ведомости" }]
  )
    .map((item) => `<li><strong>${item.title}</strong><small>${item.detail}</small></li>`)
    .join("");
}

async function loadStudents() {
  const q = document.getElementById("studentSearch").value.trim();
  const status = document.getElementById("studentStatus").value;
  const group = document.getElementById("studentGroup").value.trim();
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (status) params.set("status", status);
  if (group) params.set("group", group);

  selectedGroup = group;
  studentRows = await safeLoad(`/students?${params.toString()}`, demo.students);
  if (STATIC_DEMO) {
    const normalizedQuery = q.toLocaleLowerCase("ru-RU");
    studentRows = demo.students.filter((row) => {
      const matchesGroup = !group || row.group_name === group;
      const matchesStatus = !status || row.status === status;
      const haystack = `${fullName(row)} ${row.record_book_number || ""} ${row.specialty_name || ""}`.toLocaleLowerCase("ru-RU");
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
      return matchesGroup && matchesStatus && matchesQuery;
    });
  }
  renderStudents();
  if (groupRows.length) renderGroups();
}

function getStudentSortValue(row, key) {
  if (key === "name") return fullName(row);
  return row[key] || "";
}

function renderStudents() {
  const rows = [...studentRows].sort((a, b) => {
    const left = String(getStudentSortValue(a, studentSort.key)).toLocaleLowerCase("ru-RU");
    const right = String(getStudentSortValue(b, studentSort.key)).toLocaleLowerCase("ru-RU");
    const result = left.localeCompare(right, "ru-RU", { numeric: true });
    return studentSort.direction === "asc" ? result : -result;
  });

  document.querySelectorAll(".sort-button").forEach((button) => {
    const active = button.dataset.sort === studentSort.key;
    button.classList.toggle("active", active);
    button.dataset.direction = active ? studentSort.direction : "";
  });

  document.getElementById("studentsTable").innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td>${fullName(row)}</td>
          <td>${row.group_name || "-"}</td>
          <td>${row.record_book_number || "-"}</td>
          <td><span class="status ${studentStatusClass(row.status)}">${text(row.status)}</span></td>
          <td>${text(row.form)}</td>
          <td>${text(row.funding)}</td>
          <td>${row.specialty_name || "-"}</td>
        </tr>
      `,
    )
    .join("");
}

async function loadGroups() {
  groupRows = await safeLoad("/students/groups", demo.groups);
  renderGroupSelect();
  renderGroups();
}

async function selectGroup(name) {
  selectedGroup = name;
  document.getElementById("studentGroup").value = name;
  await loadStudents();
  renderGroups();
  switchView("students");
}

function renderGroups() {
  document.getElementById("groupsCards").innerHTML = groupRows
    .map(
      (row) => {
        const active = row.name === selectedGroup;
        return `
        <button class="group-card${active ? " active" : ""}" type="button" data-group="${row.name}" aria-label="Показать студентов группы ${row.name}">
          <strong>${row.name}</strong>
          <span>${row.specialty_name}</span>
          <span>Год набора: ${row.set_year}</span>
          <span>Всего студентов: ${row.students_count}</span>
          <span>Активных: ${row.active_count}</span>
        </button>
      `;
      },
    )
    .join("");
}

function renderGroupSelect() {
  const select = document.getElementById("newGroupId");
  if (!select) return;
  select.innerHTML = groupRows
    .map((row) => `<option value="${row.id}">${row.name}</option>`)
    .join("");
}

async function addStudent() {
  const message = document.getElementById("studentFormMessage");
  const payload = {
    last_name: document.getElementById("newLastName").value.trim(),
    first_name: document.getElementById("newFirstName").value.trim(),
    middle_name: document.getElementById("newMiddleName").value.trim() || null,
    group_id: document.getElementById("newGroupId").value,
    record_book_number: document.getElementById("newRecordBook").value.trim(),
    form: document.getElementById("newStudyForm").value,
    funding: document.getElementById("newFunding").value,
    status: "active",
  };

  if (!payload.last_name || !payload.first_name || !payload.group_id || !payload.record_book_number) {
    message.textContent = "Заполни фамилию, имя, группу и номер зачетки.";
    message.className = "form-message error";
    return;
  }

  if (STATIC_DEMO) {
    const selectedGroup = groupRows.find((row) => row.id === payload.group_id);
    demo.students.push({
      ...payload,
      group_name: selectedGroup?.name || "-",
      specialty_name: selectedGroup?.specialty_name || "-",
    });
    studentRows = [...demo.students];
    renderStudents();
    message.textContent = "Студент добавлен в демонстрационную таблицу.";
    message.className = "form-message ok";
    return;
  }

  try {
    await apiPost("/students", payload);
    ["newLastName", "newFirstName", "newMiddleName", "newRecordBook"].forEach((id) => {
      document.getElementById(id).value = "";
    });
    message.textContent = "Студент добавлен в базу.";
    message.className = "form-message ok";
    await loadStudents();
    await loadGroups();
    await loadSummary();
    await loadAnalytics();
  } catch (error) {
    message.textContent = error.message || "Не удалось добавить студента.";
    message.className = "form-message error";
  }
}

async function loadStatements() {
  const rows = await safeLoad("/documents/statements", demo.statements);
  document.getElementById("statementsTable").innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td>${row.statement_number}</td>
          <td>${formatDate(row.statement_date)}</td>
          <td>${row.group_name}</td>
          <td>${row.discipline_name}</td>
          <td>${row.teacher_name}</td>
          <td>${row.grades_count}</td>
          <td>${row.debts_count}</td>
          <td><span class="status">${text(row.status)}</span></td>
        </tr>
      `,
    )
    .join("");
}

async function loadOrders() {
  const rows = await safeLoad("/documents/orders", demo.orders);
  document.getElementById("ordersTable").innerHTML = rows
    .map(
      (row) => `
        <tr>
          <td>${row.order_number}</td>
          <td>${formatDate(row.order_date)}</td>
          <td><span class="status">${text(row.order_type)}</span></td>
          <td>${row.student_name || "-"}</td>
          <td>${row.group_name || "-"}</td>
          <td>${row.title}</td>
          <td>${formatOrderContent(row.content)}</td>
        </tr>
      `,
    )
    .join("");
}

function formatOrderContent(content) {
  if (!content || typeof content !== "object") return "-";
  const values = [];
  if (content.reason) values.push(`Причина: ${content.reason}`);
  if (content.basis) values.push(`Основание: ${content.basis}`);
  if (content.group) values.push(`Группа: ${content.group}`);
  if (content.debts) values.push(`Долгов: ${content.debts}`);
  if (content.semester) values.push(`Семестр: ${content.semester}`);
  if (content.comment) values.push(content.comment);
  return values.length ? values.join("; ") : "-";
}

async function refreshAll() {
  await loadSummary();
  await loadForms();
  await loadAttendance();
  await loadAnalytics();
  await loadUrgent();
  await loadGroups();
  await loadStudents();
  await loadStatements();
  await loadOrders();
}

function switchView(view) {
  document.querySelectorAll(".view").forEach((node) => node.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((node) => node.classList.remove("active"));
  document.getElementById(`${view}View`).classList.add("active");
  document.querySelector(`[data-view="${view}"]`).classList.add("active");

  const titles = {
    dashboard: "Дашборд деканата",
    analytics: "Аналитика",
    students: "Студенты",
    groups: "Группы",
    statements: "Ведомости",
    orders: "Приказы",
  };
  document.getElementById("pageTitle").textContent = titles[view];
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll(".sort-button").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.sort;
    if (studentSort.key === key) {
      studentSort.direction = studentSort.direction === "asc" ? "desc" : "asc";
    } else {
      studentSort = { key, direction: "asc" };
    }
    renderStudents();
  });
});

document.getElementById("refreshButton").addEventListener("click", refreshAll);
document.getElementById("applyStudentFilters").addEventListener("click", loadStudents);
document.getElementById("addStudentButton").addEventListener("click", addStudent);
document.getElementById("studentSearch").addEventListener("keydown", (event) => {
  if (event.key === "Enter") loadStudents();
});
document.getElementById("groupsCards").addEventListener("click", (event) => {
  const card = event.target.closest(".group-card");
  if (!card) return;
  selectGroup(card.dataset.group);
});

refreshAll();
