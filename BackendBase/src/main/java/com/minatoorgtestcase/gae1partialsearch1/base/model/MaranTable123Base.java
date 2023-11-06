package com.minatoorgtestcase.gae1partialsearch1.base.model;
import com.eva.base.model.BaseModel;
import com.eva.base.annotations.Table;
import com.eva.base.annotations.Searchable;


@Table(name="MaranTable123", keys={"sid"})
public class MaranTable123Base extends BaseModel {

	@Searchable(index = true, partialSearch = true)
	private String maranfield1;
	@Searchable(index = true)
	private String maranfield2;

	public void setMaranfield1(String maranfield1) {
		this.maranfield1 = maranfield1;
	}

	public String getMaranfield1() {
		return maranfield1;
	}

	public void setMaranfield2(String maranfield2) {
		this.maranfield2 = maranfield2;
	}

	public String getMaranfield2() {
		return maranfield2;
	}



}