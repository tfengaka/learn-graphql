import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Forms = () => {
	return (
		<Row>
			{/* Add Book Forms  */}
			<Col>
				<Form>
					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Tên sách" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="number" placeholder="số trang" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="ảnh bìa (nếu có)" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Năm xuất bản" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Select aria-label="Selected Author">
							<option disabled>Selected Author</option>
						</Form.Select>
					</Form.Group>
					<Button variant="info" type="submit">
						Thêm sách
					</Button>
				</Form>
			</Col>

			{/* Add Author Forms  */}
			<Col>
				<Form>
					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Họ" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Tên" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Control type="text" placeholder="Quốc gia" />
					</Form.Group>
					<Button variant="info" type="submit">
						Thêm tác giả
					</Button>
				</Form>
			</Col>
		</Row>
	);
};

export default Forms;
