import React from 'react'
import './App.css'

function Table() {
    return (
        <>
            <table style={{ border: '1px' }}>
                <col width="600px" />
                <col width="600" />
                <tr>
                    <td height="50">
                        <div id='outer-image'>
                            <div id="image">Click Through Image</div>
                        </div>
                    </td>
                    <td><textarea id="click-info" className="form-control" rows="10" readonly></textarea></td>
                </tr>
            </table>
            <hr />
            <table>
                <tr>
                    <td>
                        <pre>
                            <textarea rows="20" cols="75" id="bid" readonly>
                            </textarea>
                        </pre>
                    </td>
                    <td>
                        <pre>
                            <textarea rows="20" cols="75" id="response" readonly>
                            </textarea>
                        </pre>
                    </td>
                </tr>
            </table>
        </>
    )
}

export default Table
