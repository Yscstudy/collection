// ============================================================
//  刷题数据 — 在此处添加/修改题目
//  格式: { id, category, type, question, options, answer, explanation }
//  type: 'single' (单选) | 'multiple' (多选) | 'judge' (判断)
//  answer: 单选题填正确选项索引 (0-based)，多选题填索引数组 [0,2]，
//          判断题填 true/false
// ============================================================

const QUIZ_DATA = [
  // ==================== 数据库 ====================
  {
    id: 'db1',
    category: '数据库',
    type: 'single',
    question: 'SQL 中，以下哪个关键字用于去除重复行？',
    options: ['UNIQUE', 'DISTINCT', 'DIFFERENT', 'FILTER'],
    answer: 1,
    explanation: 'SELECT DISTINCT column FROM table 会去除查询结果中的重复行。UNIQUE 是用于定义列约束的关键字。'
  },
  {
    id: 'db2',
    category: '数据库',
    type: 'single',
    question: '事务的 ACID 特性中，I 代表什么？',
    options: ['Integrity（完整性）', 'Isolation（隔离性）', 'Index（索引）', 'Interactive（交互性）'],
    answer: 1,
    explanation: 'ACID 含义：Atomicity（原子性）、Consistency（一致性）、Isolation（隔离性）、Durability（持久性）。'
  },
  {
    id: 'db3',
    category: '数据库',
    type: 'multiple',
    question: '以下哪些操作会触发索引失效？（多选）',
    options: ['WHERE 中使用函数包裹索引列', '使用 LIKE "%keyword" 前缀模糊查询', '使用等于号精确匹配', 'WHERE 中对索引列进行运算'],
    answer: [0, 1, 3],
    explanation: '对索引列使用函数、前导模糊查询（LIKE "%abc"）、列运算（WHERE id+1=10）都会导致索引失效。等于号精确匹配会正常使用索引。'
  },
  {
    id: 'db4',
    category: '数据库',
    type: 'single',
    question: 'MySQL InnoDB 引擎默认使用的索引数据结构是什么？',
    options: ['Hash 表', 'B-Tree', 'B+Tree', '红黑树'],
    answer: 2,
    explanation: 'InnoDB 使用 B+Tree。B+Tree 所有数据存在叶子节点，叶子节点用双向链表连接，非常适合范围查询。'
  },
  {
    id: 'db5',
    category: '数据库',
    type: 'single',
    question: 'LEFT JOIN 返回的数据是什么？',
    options: [
      '只返回两表都匹配的行',
      '返回左表所有行 + 右表匹配行（无匹配为 NULL）',
      '返回右表所有行 + 左表匹配行（无匹配为 NULL）',
      '返回两表所有行'
    ],
    answer: 1,
    explanation: 'LEFT JOIN 以左表为主表，返回左表全部行，右表无匹配的列显示 NULL。相反，RIGHT JOIN 以右表为主表。'
  },
  {
    id: 'db6',
    category: '数据库',
    type: 'judge',
    question: 'MySQL 默认事务隔离级别是 READ COMMITTED。',
    options: ['正确', '错误'],
    answer: false,
    explanation: 'MySQL InnoDB 的默认隔离级别是 REPEATABLE READ（可重复读），不是 READ COMMITTED。'
  }
];
