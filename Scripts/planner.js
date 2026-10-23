let tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const text = input.value.trim();
    if(text === '') return;

    tasks.push({ text: text, completed: false });
    input.value = '';
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const container = document.getElementById('taskList');
    container.innerHTML = '';

    // Handle metric stats updates
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('totalCount').innerText = total;
    document.getElementById('completedCount').innerText = completed;
    document.getElementById('pendingCount').innerText = pending;

    // Show clean placeholder if workspace has no parameters loaded
    if (tasks.length === 0) {
        container.innerHTML = `<div class="empty-placeholder">No active tasks committed to pipeline storage array.</div>`;
        return;
    }

    // Render list elements dynamically
    tasks.forEach((task, index) => {
        container.innerHTML += `
            <div class="task-item" style="margin-top: 10px; margin-bottom: 0;">
                <div onclick="toggleTask(${index})" style="cursor:pointer; display: flex; align-items: center; gap: 10px; flex: 1;">
                    <span style="color: ${task.completed ? '#10b981' : 'var(--text-muted)'}; font-size: 16px;">
                        ${task.completed ? '✓' : '○'}
                    </span>
                    <span class="${task.completed ? 'completed' : ''}" style="font-size:15px; transition: all 0.2s;">
                        ${task.text}
                    </span>
                </div>
                <button onclick="deleteTask(${index})" style="background:#dc2626; border-color:#dc2626; padding:6px 14px; font-size:13px; color:white; border-radius: 4px;">Delete</button>
            </div>`;
    });
}

// Initial placeholder invocation
renderTasks();
