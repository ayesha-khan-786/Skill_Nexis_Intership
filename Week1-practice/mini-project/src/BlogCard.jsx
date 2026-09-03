export default function BlogCard({ post }) {
  return (
    <div style={styles.card}>
      <span style={styles.badge}>{post.category}</span>
      <h3 style={styles.title}>{post.title}</h3>
      <p style={styles.excerpt}>{post.excerpt}</p>
      <small style={styles.date}>{post.date}</small>
    </div>
  );
}

const styles = {
  card: {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '4px 8px',
    borderRadius: '4px',
    marginBottom: '0.5rem',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.15rem',
    color: '#0f172a',
  },
  excerpt: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.4',
    marginBottom: '1rem',
  },
  date: {
    color: '#94a3b8',
    fontSize: '0.8rem',
  },
};