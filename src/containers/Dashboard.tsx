import { Nav } from "react-bootstrap"

interface DashboardProps {
  club: Club;
}

const Dashboard: React.FunctionComponent<DashboardProps> = () => {
  return (
    <main>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </main>
  )
}

export default Dashboard;