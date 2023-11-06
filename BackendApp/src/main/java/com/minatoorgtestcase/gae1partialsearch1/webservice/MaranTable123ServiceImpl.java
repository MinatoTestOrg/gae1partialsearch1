package com.minatoorgtestcase.gae1partialsearch1.webservice;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.slf4j.ext.XLogger;
import org.slf4j.ext.XLoggerFactory;

import com.eva.base.factory.InstanceFactory;

import com.minatoorgtestcase.gae1partialsearch1.base.webservice.MaranTable123ServiceBaseImpl;
import com.minatoorgtestcase.gae1partialsearch1.logic.IMaranTable123BL;
import com.minatoorgtestcase.gae1partialsearch1.logic.MaranTable123BLImpl;
import com.minatoorgtestcase.gae1partialsearch1.model.MaranTable123;

@Produces(MediaType.APPLICATION_JSON)
@Path("marantable123s")
public class MaranTable123ServiceImpl extends MaranTable123ServiceBaseImpl<IMaranTable123BL<MaranTable123>, MaranTable123> {
	private static XLogger LOGGER = XLoggerFactory.getXLogger(MaranTable123ServiceImpl.class);
	public MaranTable123ServiceImpl() {
		super(InstanceFactory.getProxy(new MaranTable123BLImpl()));
	}
}
