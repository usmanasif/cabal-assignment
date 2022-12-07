import * as React from "react";

const styles = {
  grid: {
    height: "500px",
    width: "80%",
    overflowY: "auto",
  },
  border: {
    border: "1px solid black",
  },
  invalid: {
    backgroundColor: "red",
  },
};

export default DataGrid = ({ data, columns }) => {

  const isValid = (member) => {
    return member.first_name !== '' && member.last_name !== '' && member.email !== ''
  };

  const errorCount = () => {
    let count = 0
    data.forEach(member =>{
      if(!isValid(member))
        count++
    } )
    return count
  }

  const renderFields = (member, no) => {
    if (isValid(member)) {
      return (
        <tr style={{}}>
          <td style={styles.border}>{no}</td>
          <td style={styles.border}>{member.first_name}</td>
          <td style={styles.border}>{member.last_name}</td>
          <td style={styles.border}>{member.email}</td>
          <td style={styles.border}>
            <img src={member.avatar_url} alt="avatar" />
          </td>
          <td style={styles.border}>{member.company_name}</td>
          <td style={styles.border}>{member.company_title}</td>
          <td style={styles.border}>{member.phone_number}</td>
        </tr>
      );
    } else {
      return (
        <tr style={styles.invalid}>
          <td style={styles.border}>{no}</td>
          <td style={styles.border}>
            <input type="text" value={member.first_name} />
          </td>
          <td style={styles.border}>
            <input type="text" value={member.last_name} />
          </td>
          <td style={styles.border}>
            <input type="text" value={member.email} />
          </td>
          <td style={styles.border}>
            <img src={member.avatar_url} alt="avatar" />
          </td>
          <td style={styles.border}>
            <input type="text" value={member.company_name} />
          </td>
          <td style={styles.border}>
            <input type="text" value={member.company_title} />
          </td>
          <td style={styles.border}>
            <input type="text" value={member.phone_number} />
          </td>
        </tr>
      );
    }
  };

  return (
    <>
      <div>
        <p>Total Errors Count: {errorCount()}</p>
      </div>
      <div style={styles.grid}>
        <table style={styles.border}>
          <thead>
            <tr>
              <td>No</td>
              {columns.map((column) => (
                <td style={styles.border}>{column}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((member, idx) => renderFields(member, idx+1))}
          </tbody>
        </table>
      </div>
    </>
  );
};
