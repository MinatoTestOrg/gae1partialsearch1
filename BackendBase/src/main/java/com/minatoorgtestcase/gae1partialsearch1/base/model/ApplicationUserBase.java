package com.minatoorgtestcase.gae1partialsearch1.base.model;

import com.eva.base.annotations.Searchable;
import com.eva.base.authentication.UserPrivilege;

import com.eva.base.annotations.Searchable;

public class ApplicationUserBase extends UserPrivilege {


	@Searchable(index = true)
	private Boolean appAdmin=false;

	public void setAppAdmin(Boolean appAdmin) {
		this.appAdmin = appAdmin;
	}

	public Boolean isAppAdmin() {
		return appAdmin;
	}


}