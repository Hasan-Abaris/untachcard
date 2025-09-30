import React from "react";

function Templates() {
  return (
    <div className="container-fluid">
      <div className="col-lg-12 mb-3">
        <input type="hidden" name="part" value="templates" />
        <label className="form-label required">Select Template :</label>
      </div>
      <div className="form-group mb-7 vcard-template">
        <div className="row">
          <input type="hidden" name="template_id" id="templateId" value="1" />
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail img-border" data-id="1">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard1.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Simple Contact</div>
            </div>
          </div>
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail" data-id="2">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard2.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Executive Profile</div>
            </div>
          </div>
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail" data-id="3">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard3.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Clean Canvas</div>
            </div>
          </div>
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail" data-id="4">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard4.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Professional</div>
            </div>
          </div>
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail" data-id="5">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard5.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Corporate Connect</div>
            </div>
          </div>
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail" data-id="6">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard6.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Modern Edge</div>
            </div>
          </div>
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail" data-id="7">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard7.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Business Beacon</div>
            </div>
          </div>
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail" data-id="8">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard8.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Corporate Classic</div>
            </div>
          </div>
          <div className="col-md-4 mb-3 templatecard">
            <div className="img-radio img-thumbnail" data-id="9">
              <img
                src="https://vcards.infyom.com/assets/img/templates/vcard9.png"
                alt="Template"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="hover-template-name">Corporate Identity</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-5 mb-5">
        <div className="form-check form-switch">
          <input
            className="form-check-input me-3"
            type="checkbox"
            id="vcardTemplateStatus"
            name="status"
            defaultChecked={true} // or false
          />
          <label className="form-label" htmlFor="vcardTemplateStatus">
            Active
          </label>
        </div>
      </div>
      <div className="col-lg-12 mt-2 d-flex">
        <button className="btn btn-primary me-3 template-save">Save</button>
        <a
          href="https://vcards.infyom.com/admin/vcards"
          className="btn btn-secondary"
        >
          Discard
        </a>
      </div>
    </div>
  );
}

export default Templates;
