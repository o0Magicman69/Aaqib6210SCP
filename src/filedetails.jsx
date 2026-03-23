import { files } from './data.js';

export default function FileDetails(props) {
    const { Subject } = props;
    const file = files.find(
        (file) => file.Subject === Subject
    );

    if (!file) {
        return (
            <section className="content-panel">
                <h2>File Unavailable</h2>
                <p>The requested SCP subject could not be found.</p>
            </section>
        );
    }

    return (
        <section className="content-panel">
            <h2>{file.Subject}</h2>
            {file.Image ? (
                <img
                    className="scp-image"
                    src={file.Image}
                    alt={`${file.Subject} reference`}
                />
            ) : null}
            <p><strong>Class:</strong> {file.Class}</p>
            <p><strong>Description:</strong> {file.Description}</p>
            <p><strong>Containment:</strong> {file.Containment}</p>
        </section>
    );
}
            