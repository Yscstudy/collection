// ============================================================
//  知识复习数据 — 在此处添加/修改知识点
//  格式: { id, category, title, content (HTML 支持) }
// ============================================================

const KNOWLEDGE_DATA = [
  // ---------- 数据库 ----------
  {
    id: 'db1',
    category: '数据库',
    title: 'MySQL 索引原理 (B+Tree)',
    content: `
      <p><strong>定义：</strong>索引是一种用于快速查找记录的数据结构，MySQL InnoDB 使用 B+Tree。</p>
      <h4>B+Tree 特点</h4>
      <ul>
        <li>所有数据存储在叶子节点</li>
        <li>非叶子节点只存索引键，能容纳更多键 → 树更矮</li>
        <li>叶子节点通过双向链表连接，适合范围查询</li>
      </ul>
      <h4>索引类型</h4>
      <ul>
        <li><strong>聚簇索引</strong> — 主键索引，叶子存整行数据</li>
        <li><strong>二级索引</strong> — 非主键索引，叶子存主键值（需要回表）</li>
        <li><strong>覆盖索引</strong> — 查询列都在索引中，无需回表</li>
      </ul>
      <p>索引不是越多越好 — 每次写入都要维护索引，会降低写性能。</p>
    `
  },
  {
    id: 'db2',
    category: '数据库',
    title: '事务 ACID 特性',
    content: `
      <p><strong>定义：</strong>事务是一组不可分割的操作单元，要么全部成功，要么全部回滚。</p>
      <h4>ACID 含义</h4>
      <ul>
        <li><strong>A — Atomicity（原子性）：</strong>事务中的所有操作要么全部完成，要么全部不做</li>
        <li><strong>C — Consistency（一致性）：</strong>事务执行前后，数据库从一个一致状态转换到另一个一致状态</li>
        <li><strong>I — Isolation（隔离性）：</strong>并发事务之间互不干扰，每个事务都感觉不到其他事务的存在</li>
        <li><strong>D — Durability（持久性）：</strong>事务一旦提交，其结果永久保存在数据库中，即使系统崩溃也不丢失</li>
      </ul>
      <h4>隔离级别（MySQL）</h4>
      <table>
        <tr><th>级别</th><th>脏读</th><th>不可重复读</th><th>幻读</th></tr>
        <tr><td>READ UNCOMMITTED</td><td>✓</td><td>✓</td><td>✓</td></tr>
        <tr><td>READ COMMITTED</td><td>✗</td><td>✓</td><td>✓</td></tr>
        <tr><td>REPEATABLE READ（默认）</td><td>✗</td><td>✗</td><td>✓</td></tr>
        <tr><td>SERIALIZABLE</td><td>✗</td><td>✗</td><td>✗</td></tr>
      </table>
    `
  },
  {
    id: 'db3',
    category: '数据库',
    title: 'SQL 连接 (JOIN) 类型',
    content: `
      <p><strong>定义：</strong>JOIN 用于根据两个或多个表之间的关联列来组合数据。</p>
      <h4>常见 JOIN 类型</h4>
      <ul>
        <li><strong>INNER JOIN：</strong>返回两个表中匹配的行</li>
        <li><strong>LEFT JOIN：</strong>返回左表所有行 + 右表匹配行（无匹配则为 NULL）</li>
        <li><strong>RIGHT JOIN：</strong>返回右表所有行 + 左表匹配行（无匹配则为 NULL）</li>
        <li><strong>FULL OUTER JOIN：</strong>返回两表所有行（MySQL 不直接支持，需 UNION 实现）</li>
        <li><strong>CROSS JOIN：</strong>笛卡尔积，两表每行都组合</li>
      </ul>
      <pre><code>-- INNER JOIN 示例
SELECT u.name, o.amount
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN 示例（用户即使没订单也显示）
SELECT u.name, o.amount
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;</code></pre>
    `
  }
];
