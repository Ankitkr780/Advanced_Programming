import React, { useState } from "react";
  const [students, setStudents] = useState(new Map());
  const [name, setName] = useState("");
  const [gpa, setGpa] = useState("");
  const [courses, setCourses] = useState("");
  const [filterCourse, setFilterCourse] = useState("");


function App() {


  const addStudent = () => {
    const id = Date.now();
    const newStudent = {
      id,
      name: name || "No Name",
      gpa: Number(gpa) || 0,
      enrolledCourses: new Set(courses ? courses.split(",").map(c => c.trim()) : ["None"]),
    };
    const newMap = new Map(students);
    newMap.set(id, newStudent);
    setStudents(newMap);
    setName(""); setGpa(""); setCourses("");
  };

  const removeStudent = (id) => {
    const newMap = new Map(students);
    newMap.delete(id);
    setStudents(newMap);
  };

  const studentArray = Array.from(students.values());
  const sorted = [...studentArray].sort((a, b) => b.gpa - a.gpa);
  const allCourses = studentArray.reduce((acc, s) => { s.enrolledCourses.forEach(c => acc.add(c)); return acc; }, new Set());
  const filtered = filterCourse ? sorted.filter(s => s.enrolledCourses.has(filterCourse)) : sorted;





  const style = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0f1117; }
  .sd-root { background: #0f1117; min-height: 100vh; padding: 2rem 1.5rem; font-family: 'DM Sans', sans-serif; color: #e8e4da; max-width: 640px; margin: 0 auto; }
  .sd-header { display: flex; align-items: baseline; gap: 1rem; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #2a2d38; }
  .sd-title { font-family: 'DM Serif Display', serif; font-size: 2rem; color: #f5f0e8; letter-spacing: -0.02em; }
  .sd-count { font-size: 13px; color: #6b7280; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 500; }
  .sd-form { background: #161820; border: 1px solid #252830; border-radius: 12px; padding: 1.25rem; margin-bottom: 1.75rem; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .sd-form input { background: #0f1117; border: 1px solid #2a2d38; border-radius: 8px; padding: 8px 12px; font-size: 13px; color: #e8e4da; font-family: 'DM Sans', sans-serif; transition: border-color .2s; }
  .sd-form input::placeholder { color: #4b5060; }
  .sd-form input:focus { outline: none; border-color: #c9a84c; }
  .sd-form input.full { grid-column: 1 / -1; }
  .sd-add-btn { grid-column: 1 / -1; background: #c9a84c; color: #0f1117; border: none; border-radius: 8px; padding: 9px; font-size: 13px; font-weight: 500; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: background .2s; }
  .sd-add-btn:hover { background: #d9bb6e; }
  .sd-section-label { font-size: 11px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500; margin-bottom: 10px; }
  .sd-courses { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
  .sd-course-btn { background: #1c1f2b; border: 1px solid #2a2d38; color: #a0a8c0; border-radius: 20px; padding: 4px 12px; font-size: 12px; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all .2s; }
  .sd-course-btn:hover, .sd-course-btn.active { background: #c9a84c22; border-color: #c9a84c; color: #c9a84c; }
  .sd-clear { background: transparent; border: none; color: #4b5060; font-size: 12px; cursor: pointer; font-family: 'DM Sans', sans-serif; text-decoration: underline; text-underline-offset: 2px; }
  .sd-clear:hover { color: #c9a84c; }
  .sd-students { display: grid; gap: 10px; margin-top: 1.5rem; }
  .sd-card { background: #161820; border: 1px solid #252830; border-radius: 12px; padding: 1rem 1.25rem; display: flex; align-items: center; gap: 14px; transition: border-color .2s; }
  .sd-card:hover { border-color: #2e3245; }
  .sd-avatar { width: 40px; height: 40px; border-radius: 50%; background: #1c1f2b; border: 1px solid #2a2d38; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #c9a84c; font-family: 'DM Serif Display', serif; flex-shrink: 0; }
  .sd-info { flex: 1; min-width: 0; }
  .sd-name { font-size: 14px; font-weight: 500; color: #f5f0e8; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .sd-meta { font-size: 12px; color: #6b7280; }
  .sd-gpa-badge { background: #c9a84c18; color: #c9a84c; border: 1px solid #c9a84c44; border-radius: 6px; padding: 3px 8px; font-size: 12px; font-weight: 500; flex-shrink: 0; }
  .sd-remove-btn { background: transparent; border: 1px solid #2a2d38; color: #4b5060; border-radius: 6px; padding: 4px 10px; font-size: 11px; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all .2s; }
  .sd-remove-btn:hover { border-color: #6b1a1a; color: #e06060; }
  .sd-empty { text-align: center; padding: 2.5rem; color: #4b5060; font-size: 13px; }
  .sd-divider { border: none; border-top: 1px solid #1c1f2b; margin: 1.25rem 0; }
`;

function initials(name) {
  return name.trim().split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 2) || "??";
}
  return (
    <>
      <style>{style}</style>
      <div className="sd-root">
        <div className="sd-header">
          <span className="sd-title">Student Dashboard</span>
          <span className="sd-count">{studentArray.length} student{studentArray.length !== 1 ? "s" : ""}</span>
        </div>

        <div className="sd-form">
          <input className="full" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
          <input type="number" placeholder="GPA (0.0 – 4.0)" step="0.1" min="0" max="4" value={gpa} onChange={e => setGpa(e.target.value)} />
          <input placeholder="Courses (comma-separated)" value={courses} onChange={e => setCourses(e.target.value)} />
          <button className="sd-add-btn" onClick={addStudent}>+ Add Student</button>
        </div>

        <div className="sd-section-label">Courses</div>
        <div className="sd-courses">
          {[...allCourses].map((c, i) => (
            <button key={i} className={`sd-course-btn${filterCourse === c ? " active" : ""}`} onClick={() => setFilterCourse(c)}>{c}</button>
          ))}
        </div>
        <button className="sd-clear" onClick={() => setFilterCourse("")}>Clear filter</button>

        <hr className="sd-divider" />

        <div className="sd-section-label">Students</div>
        <div className="sd-students">
          {filtered.length === 0 ? (
            <div className="sd-empty">No students to show</div>
          ) : filtered.map(s => (
            <div className="sd-card" key={s.id}>
              <div className="sd-avatar">{initials(s.name)}</div>
              <div className="sd-info">
                <div className="sd-name">{s.name}</div>
                <div className="sd-meta">{[...s.enrolledCourses].join(" · ")}</div>
              </div>
              <div className="sd-gpa-badge">{s.gpa.toFixed(1)}</div>
              <button className="sd-remove-btn" onClick={() => removeStudent(s.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;