import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlagiarismChecker = () => {

    const navigate = useNavigate();


    const handle = () => {
        navigate('/report');
    }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Plagiarism Checker</h1>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Web Search</button>
          <button style={styles.button}>Text Comparison</button>
          <button style={styles.button}>AI Detection</button>
        </div>
      </div>
      <div style={styles.mainContent}>
        <div style={styles.column}>
          <div style={styles.sectionHeader}>
            <h3>Automatic</h3>
          </div>
          <div style={styles.abstractContainer}>
            <h4>Abstract</h4>
            <p>
              Online voting is an advanced method of performing elections
              through the internet, reducing the need for conventional printed
              ballots and voting machines that are electronic. The main focus of
              this method is to ensure that each voter's vote remains impervious
              to interference or compromise. Due to its inherent advantages,
              including decentralized nodes for voting and exhaustive end-to-end
              validation, we decided to use blockchain-based technology in the
              voting process. Utilizing blockchain-based systems ensures an
              excellent level of validation and safety for electors, aligning
              with the fundamental principles of a free and equitable election
              process.
            </p>
            <p style={styles.wordCount}>Words: 64</p>
          </div>
        </div>
        <div style={styles.reportSection}>
          <div style={styles.reportCard}>
            <div style={styles.reportItem}>
              <h3>Web Search</h3>
              <p style={styles.plagiarismRate}>67% Plagiarized</p>
            </div>
            <div style={styles.reportItem}>
              <h3>Sources</h3>
              <p>10 Sources Found</p>
            </div>
          </div>
          <div style={styles.reportButtons}>
            <button style={styles.reportButton}>Web Search</button>
            <button style={styles.reportButton}>Sources</button>
            <button style={styles.reportButton}>Citations</button>
          </div>
          <div style={styles.reportAbstract}>
            <h4>Abstract</h4>
            <p>
              <span style={styles.highlightRed}>
                performing elections through the Internet, reducing
              </span>{' '}
              the need for conventional printed ballots and voting machines that
              are electronic. The main focus of this method is to ensure that
              each voter's vote remains{' '}
              <span style={styles.highlightYellow}>
                impervious to interference or compromise.
              </span>{' '}
              Due to it inherent advantages, including decentralized nodes for
              voting and exhaustive end- to- end validation, we decided to use{' '}
              <span style={styles.highlightOrange}>
                blockchain-based technology in the i voting process.
              </span>{' '}
            </p>
          </div>
        </div>
      </div>
      
      <div className='w-100'>
      <button className='text-center btn btn-primary mt-4' onClick={handle}>Generate Report</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#f28000',
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    backgroundColor: '#6a0dad',
    color: '#fff',
    padding: '10px 15px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  column: {
    flex: 1,
    marginRight: '20px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
  },
  sectionHeader: {
    backgroundColor: '#ccc',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  abstractContainer: {
    textAlign: 'left',
  },
  wordCount: {
    color: '#666',
    marginTop: '10px',
  },
  reportSection: {
    flex: 1,
    marginLeft: '20px',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  reportCard: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  reportItem: {
    textAlign: 'center',
  },
  plagiarismRate: {
    color: 'red',
    fontWeight: 'bold',
  },
  reportButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  reportButton: {
    backgroundColor: '#6a0dad',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  reportAbstract: {
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
  highlightRed: {
    color: 'red',
  },
  highlightYellow: {
    color: 'orange',
  },
  highlightOrange: {
    color: '#6a0dad',
  },
};

export default PlagiarismChecker;