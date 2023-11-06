package com.minatoorgtestcase.gae1partialsearch1.logic;

import com.eva.base.acl.IPerimeterManager;
import com.minatoorgtestcase.gae1partialsearch1.base.logic.MaranTable123BLBaseImpl;
import com.minatoorgtestcase.gae1partialsearch1.model.MaranTable123;
import com.minatoorgtestcase.gae1partialsearch1.logic.MaranTable123PerimeterImpl;


public class MaranTable123BLImpl extends MaranTable123BLBaseImpl<MaranTable123> implements IMaranTable123BL<MaranTable123>{

	public MaranTable123BLImpl() {
		super(MaranTable123.class);	
		setChangelogBL(new ChangelogBLImpl()); 
	}
	

	
	protected IPerimeterManager<MaranTable123> getPerimeterManager() {
		return new MaranTable123PerimeterImpl();
	}
}