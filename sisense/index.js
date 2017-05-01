import React, { Component, PropTypes } from "react";

let sisenseApplication;

const insertWidgetToContainer = (dashboardId, widgetId, container, self) => {
  if (sisenseApplication) {
    sisenseApplication.dashboards.load(dashboardId).then((dash) => {
      const widget = dash.widgets.get(widgetId);
      widget.container = container;
      // widget.container[0].style.width="100%";
      // widget.container[0].style.height="400px";
      dash.refresh();
      // setTimeout(() => {
      //   self.setState({
      //     loading: false
      //   });
      // }, 500);
    });
  } else {
    setTimeout(() => {
      insertWidgetToContainer(dashboardId, widgetId, container, self);
    }, 30);
  }
};

export class Widget extends Component {
  static propTypes = {
    dashboard: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }
  // static defaultProps = {
  // }
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { dashboard: dashboardId, id: widgetId } = this.props;
    insertWidgetToContainer(dashboardId, widgetId, this.container, this);
  }

  render() {
    // const {dashboard:dashboardId, id: widgetId} = this.props
    // const { loading } = this.state;

    return (
      <div
        style={{ height: 400 }}
        ref={(container) => this.container = container}
      >
        {/* {loading && "Loading widget..."} */}
      </div>
    );
  }
}

export default {
  connect: (sisenseUrl = "http://localhost") => {
    if (!sisenseApplication) {
      return window.Sisense.connect(sisenseUrl).then((app) => {
        sisenseApplication = app;
        return sisenseApplication;
      });
    } else {
      return sisenseApplication;
    }
  }
};
